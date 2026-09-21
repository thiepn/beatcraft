const CACHE_PREFIX='beatcraft-shell-';
const CACHE='beatcraft-shell-v3.1.0';
const SHELL=['./','./index.html','./manifest.webmanifest','./icon.svg'];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key.startsWith(CACHE_PREFIX)&&key!==CACHE).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET'||request.headers.has('range'))return;

  const url=new URL(request.url);
  if(url.origin!==self.location.origin)return;

  const scope=new URL(self.registration.scope);
  const indexURL=new URL('./index.html',scope);
  const shellURLs=new Set(SHELL.map(path=>new URL(path,scope).href));
  const isShellNavigation=request.mode==='navigate'&&(url.pathname===scope.pathname||url.pathname===indexURL.pathname);

  if(isShellNavigation){
    event.respondWith(
      fetch(request).then(async response=>{
        if(response&&response.ok){
          const cache=await caches.open(CACHE);
          await cache.put('./index.html',response.clone());
        }
        return response;
      }).catch(()=>caches.match('./index.html').then(hit=>hit||caches.match('./')))
    );
    return;
  }

  if(!shellURLs.has(url.href))return;

  event.respondWith(
    caches.match(request).then(hit=>hit||fetch(request).then(async response=>{
      if(response&&response.ok){
        const cache=await caches.open(CACHE);
        await cache.put(request,response.clone());
      }
      return response;
    }))
  );
});

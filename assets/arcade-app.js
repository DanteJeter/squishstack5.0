'use strict';
(()=>{if(!('serviceWorker' in navigator)||!window.isSecureContext)return;
const root=new URL('../',document.currentScript.src);const note=document.createElement('p');note.className='app-status';note.setAttribute('role','status');document.body.append(note);
const status=()=>note.textContent=navigator.onLine?'Ready for offline play.':'Offline play. Shopping needs internet.';
navigator.serviceWorker.register(new URL('sw.js',root),{scope:root.pathname,updateViaCache:'none'}).then(async reg=>{
 const registrations=await navigator.serviceWorker.getRegistrations();for(const old of registrations)if(old.scope===new URL('games/stack/',root).href)await old.unregister();
 navigator.serviceWorker.ready.then(status);window.addEventListener('online',status);window.addEventListener('offline',status);
 const offer=worker=>{note.textContent='A fresh batch of squish is ready.';const b=document.createElement('button');b.textContent='Update app';b.onclick=()=>{navigator.serviceWorker.addEventListener('controllerchange',()=>location.reload(),{once:true});worker.postMessage({type:'SKIP_WAITING'});};note.append(b);};
 if(reg.waiting)offer(reg.waiting);reg.addEventListener('updatefound',()=>{const w=reg.installing;if(w)w.addEventListener('statechange',()=>{if(w.state==='installed'&&navigator.serviceWorker.controller)offer(w);});});
}).catch(()=>{note.textContent='Play online. Reconnect and reload to prepare offline play.';});})();

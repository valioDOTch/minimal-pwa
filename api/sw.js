const context = self;
const fetchDirectly = ["sw.js"]; //path is relative to directory (api/sw.js)
const swName = "ApiServiceWorker";

importScripts('../sw-lib.js');

// ============= Listener registration

context.addEventListener('install',installServiceWorker);
context.addEventListener('activate', activateServiceWorker);
context.addEventListener('fetch', fetchResource);

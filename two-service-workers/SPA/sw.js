const context = self;
const fetchDirectly = ["","index.html","sw.js","api/sw.js"];
const swName = "otherServiceWorker";

importScripts('sw-lib.js');

// ============= Listener registration

context.addEventListener('install',installServiceWorker);
context.addEventListener('activate', activateServiceWorker);
context.addEventListener('fetch', fetchResource);



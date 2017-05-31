self.onfetch = event => {
    if (event.request.url.indexOf('content') != -1)
        event.respondWith(new Response('Hi from root'));
};

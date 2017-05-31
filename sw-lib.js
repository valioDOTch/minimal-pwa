//get the domain + directory this service worker resides at
const location = context.location.toString();
const urlPrefix = location.substr(0,location.lastIndexOf("/")+1);

//get the full URL of the files that shall be fetched directly
const dontIntercept = fetchDirectly.map((i)=>{return urlPrefix+i;});

// ============= Resource fetching

function fetchResource(event){
    //clone request in order to peek at it, without running into single-read issues
    let request = event.request.clone();
    //check if the request shall be fetched by the server
    if (dontIntercept.indexOf(request.url)!==-1) {
        //if so fetch it now
        fetch(event.request);
    } else {
        //else provide a service worker generated response
        let responseContent = JSON.stringify({
            swName: swName,
            time: (new Date()).valueOf()
        });
        event.respondWith(new Response(responseContent));
    }
}

// ============= Register & Activate

function installServiceWorker(event){
    console.log('Installing '+swName, event);
    context.skipWaiting().then(()=>{
        console.log(swName+" skipped waiting");
    });
}

function activateServiceWorker(event) {
    console.log('Activating '+swName, event);
    context.clients.claim().then(function(){
        console.log('Clients claimed for '+swName);
        setTimeout(()=>{getMatchingClients(false);},3000);
    });
}

// ============= Utility function

function getMatchingClients(includeUncontrolled){
    context.clients.matchAll({
        includeUncontrolled: includeUncontrolled
    }).then(function(clientList) {
        let urls = clientList.map(function(client) {
            return client.url;
        });
        console.log(swName+' matching clients:', urls.join(', '));
    });
}

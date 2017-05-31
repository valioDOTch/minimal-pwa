This repo contains simple tests for progressive web apps.

The code should reside on a simple webserver.

Due to security restrictions one of the following rules must be followed
* the webserver is local and it's domain is "localhost"
* the webserver serves files via **https**

## List of tests

* **two-service-workers/no-SPA**: This shows how you can use two service workers, if the scope matches them. This is [a copy-paste from StackOverflow]( https://stackoverflow.com/a/35647786/4094096). 
* **two-service-workers/SPA**: This shows that only one service worker per scope can be active. XHR & fetch for subscopes won't work out of a single page app. For details see [my comment at StackOverflow](https://stackoverflow.com/questions/35646155/precedence-rule-for-serviceworker-in-case-of-two-serviceworkers#comment75574072_35647786)   
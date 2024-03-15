#### CORS what, where  
Cross-Origin Resource Policy  
http-header based mechanism to indicate 
what origin (domain, scheme, port)  
browser permit loading resources from  

**Header**  
`Access-Control-Allow-Origin`  
`*` any origin, `<origin>` only origin, `null`  

for security, browser restrict cross-origin HTTP requests  

requests that use CORS  
`fetch()` or `XMLHttpRequest`  

different protocol, host, port is not the same origin  

Allowed by cross-origin access  
methods:  
`window.blur .close .focus .postMessage`  
`location.replace`
properties:   
`window.closed .frames .length .location .opener .parent .self .top . window`  
`location.href`

to communicate betwen documents from different origins use `postMessage`  

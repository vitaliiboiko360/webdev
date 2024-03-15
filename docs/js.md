#### Async code  

Async functions  
promise-based code as it is synchronous 
but w/o blocking main thread   

```
async function myAsyncFunction() {
  try {
    const fulfilledValue = await promise;
  } catch (rejectedValue) {
    // …
  }
}
```  

#### Promise  
Promise is object returned by async function  
async func starts and returns the Promise  
`.then()` returns promise   
```
fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });
  ```

#### ... operator  

```
function func(...promises) {
  Promise.allSettled(promises);
}
```  

#### fetch  
promise-based replacement for XMLHttpRequest  
```
const fetchPromise = fetch('http://some.url/');  

```

#### .then() vs async/await  
making async requests 
you can use  
> `.then()`  
or  
>  `async/await`  

in async func  execution paused until promise settles  
with `.then()` rest of the func continue executing    
 `.then()` callback executes when promise settles  

Recommend:  use async/await and minimize promise chaining  
because of easier readability  

#### web workers  
worker can run tasks in a separate thread of execution   
three sorts of workers:  
- dedicated  
- shared  
- service  

```
const worker = new Worker("./script.js");  
```  
send message to worker  
```
 worker.postMessage({
  // data to send
    property0: "value",
    property1,
  });
```  

_shared_ - shared by serveral different scripts running in different windows  
_service_ - caching resource so that web app can work offline 


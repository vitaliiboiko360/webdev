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
fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });

```
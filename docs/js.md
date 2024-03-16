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

#### Async return promise  
```
// wait ms milliseconds
function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function func() {
  await wait(500);
  return 'result';
}
```

#### Async syntax  
could be async  
* arrow functions   
```  
someContainer.map(async (arg)=> {
  // ...
});
```  

* object methods  
```
let obj = {
  async objMethod {
    // ...
  }
}
```

* class methods  
```
class MyClass {
  async myMethod() {
    // ...
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
    console.log(data);
  });
  ```

#### argument.length  


#### ... operator  

sprea(...) syntax - iterable (array, string) expanded in place where zero or more arguments (elements in case of array) are expected  

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

#### ES2015  
added `let` and `const` keywords  

#### Boolean type  
```
const good = Boolean(expression);
const good2 = !!expression;
```  
would be true based on Truthines not the actual expression  
```
const bad = new Boolean(expression); // based on Truthines
```


#### Truthy values  
values considered `true` in context of Boolean  
except `false` `0` `-0` `0n` `""` `null` `undefined` `NaN` `document.all`  
would be true  
- strings  
- Symbols  
- All objects  

#### BigInt  
```
0n === 0; // false
0n == 0; // true
```  
use BigInit when values greater than 2^53   

#### Strict equality operator ===  
different types always considered different  

#### Equality operator ==  
attempts to convert if types operands are different  
 and compare operands   

#### Higher-order functions   
funcs can be assigned to variable then passed as argument or returned from func  
higher-order funciton is function that accpets functions as parameters 
and/or  returns a function   

#### ES14 aka ES2023   
Array.prototype 4 new methods **change by copy**    
`toReversed` `toSorted` `toSpliced` and `with`  

`fineLast()`  `findLastIndex()`  

#### IIFE  
Imeadeately Invoked Function Expresion  
we would get a new scope for IIFE  
not to polute global scope  
```
(function() {
  // ...
})();
```

#### Scope  
smallest atomic portion of scope is function scope  

#### var hoisting  
```
// hoisted declaration to top of the scope  
var a;
var b;
a;
b;
var a = b;
var b = 2;
```  

#### this keyword  
every function, while executing, has a reference to its own current execution context, called this 
(execution context: where the fn called, how it called, local variable, stack )   
execution context - refers to code that is currently running and everything else that helps run it  

#### this in strict and non-strict mode  
non-strict mode this is always reference to object  
strict mode this can be any value  

value `this` depens on context it appears: fucntion, class, global    
value of `this` is not the object that has the function as an own property  
but the object that is used to call the function  

#### implicit binding 
```
function func(obj) {
  obj.method = function() {
    console.log(this.property);
  }
}

const obj1 = {
  property: 'obj1',
}
const obj2 = {
  property: 'obj2',
}

func(obj1);
func(obj2);
obj1.method(); // obj1
obj2.method(); // obj2
```

#### this - binding   
`Function.prototype.bind()` methods sets the value of this regardless  
of how it's called  
arrow funcs don't provide their own `this` but value of enclosing lexical context   

this in class constructor bound to an object being constructed   

class in static and instance contexts  
instance context:  
constuctor, methods, and instanse field initalizers  
`this` is the instance of the class  
static context:  
static methods, static fields initializers, statin init blocks  
`this` is the value of class  

#### global this context  
if we access global `this` and code is run in HTML `<script>` element  
`this === window`  

#### call() apply()  bind()  
`apply()` identical to `call()`  
`apply()` requires an array as the second parameter  
`call()` requries parameters be listed explicitly    
`bind()`  return the function, that later executed with set `this`  

example:  Node.js async callback, passing there a member method 
but wanting the context to be the instance that started teh async function  


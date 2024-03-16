#### Types
boolean 
number  
string  
Array  
`number[]` `Array<number>` Array of numbers  `string[]` of strings  

Enum  
any (could be assigned any type, disable typechecking)  
void (absense of type)  

w/o specifying type  
typescript will use type inference  

Tuple types  
sort of `Array` type that knows number of elements and their types  
`type strNumTuple = [string, number];`  

Function return type annotaion  
```
function getNumber(): number {
  return 21;
}
```  

Object type annotation  
```
function setObj(obj: {x: number; y:number}) {
  //...
}
```
use `,` or `;` to separate properties  

union types  
TS allow an operation if it is valid for every member of the union  
with type `string | number` can not use methods available only on `string`  


#### Decorators  

```
function myDecortor() {
  // ...
}

@myDecorator
class A {}
```  

5 types of decorators  
- Class  
- Property  
- Method  
- Accessor 
- Parameter  

```
@classDecorator
class MyClass {
  @propertyDecorator
  myProperty: string;

  @methodDecorator
  myMethod(
    @parameterDecorator
    myParameter
  ) {}

  @accessorDecorator  
  get myAccessor() {}
}
```  
Decorator execute only once, when class definition is first evaluated at runtime  
```
function myDecorator(param) {
  console.log('apply myDecorator);
}

@myDecorator
class A {}
// output: apply myDecorator
```  



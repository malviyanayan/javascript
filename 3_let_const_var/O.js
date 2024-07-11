/*No Hoisting: Similar to let, const declarations are in the 
"temporal dead zone" until their definition is evaluated.  */

console.log(x); // cannot access here

const x = 34

console.log(x); // accessible here
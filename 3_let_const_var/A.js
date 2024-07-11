                           /* Declearing var  */


var x = 45;
console.log(x); // printing x 45

{
    var x = 34; // this is work only this scope not visible outside
    console.log(x); // printing 34 becouse for this scope value of x is 34
}

console.log(x); // printing x 45
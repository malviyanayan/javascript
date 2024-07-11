/*Global Object Property: When declared outside any function, var variables become properties of the global object (window in browsers).*/

var x = 34;

function func(){
    console.log(x)
}

func()
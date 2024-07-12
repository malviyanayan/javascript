function handleObject(anyObject){
    return `my name is ${anyObject.fullName} and age is ${anyObject.age}.`;
}


console.log(handleObject({
    fullName : "Anuj Vishwakarma",
    age : 54
}));
// mai yaha se bhi Object bana ker pass kar sakta hun
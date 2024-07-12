function handleObject(anyObject){
    return `my name is ${anyObject.fullName} and age is ${anyObject.age}.`;
    // here age is treated as undefind
    // we can use if else condition for typesafty
}

let person = {
    fullName : "Nayan Malviya",
    ph : "7798880"
}

console.log(handleObject(person));

// here typeSafty is required
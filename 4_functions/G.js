function handleObject(anyObject){
    return `my name is ${anyObject.fullName} and age is ${anyObject.age}.`;
}

let person = {
    fullName : "Nayan Malviya",
    age : 32,
    ph : "7798880"
}

console.log(handleObject(person));
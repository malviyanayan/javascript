// we can also pass array

function printInfo(Student){
    return `My name is ${Student.fullName} and my age is ${Student.age} and my marks : ${Student.marks}`
}

let Student = {
    fullName : "Nayan Malviya",
    age : 20,
    marks : [90,95,84,77,75]
}

console.log(printInfo(Student));
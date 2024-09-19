// accessing js Objects

let person = {
    'my name' : "Nayan Malviya",
    age : 20
}

// direct access
// console.log("Name : " + person.my name); // error but
console.log("Name : " + person["my name"]); // second option to access js values
console.log("Age : " + person.age);
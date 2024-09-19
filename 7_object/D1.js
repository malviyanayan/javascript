let college = {
    collegeName : "BGIEM",
    code : "0246",
    ceo : "Rajeev khatri",
    email : "bgiem0246@global.org.in"
}

console.log(college);

// ab kuchh bhi update nhi hoga
console.log("~~~~~~~~~~~~~~~~~~~~~~~~");
Object.freeze(college)
college.locations = "jabalpur"
console.log(college);
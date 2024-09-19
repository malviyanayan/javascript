let college = {
    collegeName : "BGIEM",
    code : "0246",
    ceo : "Rajeev khatri",
    email : "bgiem0246@global.org.in"
}

console.log(college);

Object.freeze(college); // run but object not update

college.email = "Sourabh Baderia"
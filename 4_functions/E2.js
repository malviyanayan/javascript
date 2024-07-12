function getNumbers(name, age, ...nums){ // take first argument as name second as age and other all arguments converted into array
    console.log("Name : "+name);
    console.log("Age : "+age);
    return nums
}

console.log(getNumbers("nayan",23,4.5,4,5)); 
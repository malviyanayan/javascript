function getNumbers(name, age, ...nums){//if we cant get arguments for nums so its fine and it make an array of 0 size and return
    console.log("Name : "+name);
    console.log("Age : "+age);
    return nums
}

console.log(getNumbers("nayan",23));
function getNumbers(...nums,name,age){
    // error :  Rest parameter must be last formal parameter
    console.log("Name : "+name);
    console.log("Age : "+age);
    return nums
}

console.log(getNumbers("nayan"));

// Rest parameter hamesha last parameter hona chahiye
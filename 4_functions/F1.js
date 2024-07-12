function getNumbers(...nums1,..nums2){
    // SyntaxError: Rest parameter must be last formal parameter
    console.log(nums1);
    return nums2;
}

console.log(getNumbers("nayan"));

// Rest parameter hamesha ek function me ek hi hona chahiye
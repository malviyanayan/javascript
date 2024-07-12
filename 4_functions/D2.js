// but ham if ka use ker sakte hai idhar
function getUsernameMessage(user){
    if(user != undefined)
        return `${user} just logged in`; // ye user ko undefind manker run ho jayega

    else return;
}

console.log(getUsernameMessage());  //undefined 
console.log(getUsernameMessage("nayan malviya"));  // nayan malviya just logged in
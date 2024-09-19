let person = {
    name : "Nayan Malviya",
    age : 20,

    showInfo : function(){
        console.log("My name is " + this.name + ".");
        console.log("My age is " + this.age + ".");
    }
}

person.showInfo();

console.log("~~~~~~~~~~~~~~~~~");
delete person.age;

person.showInfo();
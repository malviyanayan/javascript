let names = new Map();

names.set(1,"Nayan Malviya")
names.set(2,"Nayan Soni")
names.set(3,"Anuj Vishwakarma")
names.set(4,"Anshul Namdev")
names.set(5,"Prabhat narayan payasi")
names.set(6,"Pradeep yadav")

console.log(names);

console.log(names.has(2)); // expected true becouse 2 is key
console.log(names.has("Nayan Malviya")); // expected false because "Nayan Malviya" is not key
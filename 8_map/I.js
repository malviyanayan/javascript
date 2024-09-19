const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

let values = fruits.values();
console.log(values);

for (let value of values) {
    console.log(value);
}

console.log(values);
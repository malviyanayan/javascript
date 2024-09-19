const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

for (let [key, value] of fruits.entries()) {
    console.log(`${key}: ${value}`);
}
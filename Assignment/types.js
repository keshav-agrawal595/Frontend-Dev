let stringVar = "Hello";
let numberVar = 42;
let booleanVar = true;
let arrayVar = [1, 2, 3];
let objectVar = {name: "John", age: 25};
let nullVar = null;
let undefinedVar = undefined;

let data = [
    {Label: "stringVar", Value: stringVar, Type: typeof stringVar},
    {Label: "numberVar", Value: numberVar, Type: typeof numberVar},
    {Label: "booleanVar", Value: booleanVar, Type: typeof booleanVar},
    {Label: "arrayVar", Value: String(arrayVar), Type: Array.isArray(arrayVar) ? "array" : typeof arrayVar},
    {Label: "objectVar", Value: JSON.stringify(objectVar), Type: typeof objectVar},
    {Label: "nullVar", Value: nullVar, Type: typeof nullVar},
    {Label: "undefinedVar", Value: undefinedVar, Type: typeof undefinedVar}
];

console.table(data);

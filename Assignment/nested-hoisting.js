"use strict";

console.log("=== PREDICTION ===");
console.log("Output will be:");
console.log("undefined (outer count hoisted but not initialized)");
console.log("undefined (inner count hoisted but not initialized)");

console.log("\n=== ACTUAL OUTPUT ===");

function outer() {
    console.log(count);
    var count = 5;
    function inner() {
        console.log(count);
        var count = 10;
    }
    inner();
}
outer();

console.log("\n=== EXPLANATION ===");
console.log("Each 'var count' creates a separate scope");
console.log("Hoisting moves declarations to top of their function");
console.log("Inner count shadows outer count within inner()");
console.log("Both are undefined at console.log due to hoisting");

console.log("\n=== ARROW FUNCTION VERSION ===");

function outer2() {
    console.log(count);
    var count = 5;
    const inner2 = () => {
        console.log(count);
        var count = 10;
    };
    inner2();
}
outer2();

console.log("\n=== ARROW FUNCTION NOTES ===");
console.log("Arrow functions don't change var hoisting behavior");
console.log("Behavior is identical to regular function");
console.log("Arrow functions differ in 'this' binding, not hoisting");

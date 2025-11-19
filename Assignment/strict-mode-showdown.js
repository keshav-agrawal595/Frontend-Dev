
console.log("=== WITHOUT STRICT MODE ===");

function demoNonStrict(a, a) {
    total = 10;
    delete total;
    console.log("Executed without errors");
}

try {
    demoNonStrict(5, 10);
} catch (error) {
    console.log("Error:", error.message);
}

console.log("\n=== WITH STRICT MODE ===");

try {
    eval(`
        "use strict";
        function demoStrict(a, a) {
            total = 10;
            delete total;
        }
        demoStrict(5, 10);
    `);
} catch (error) {
    console.log("Error:", error.message);
}

console.log("\n=== ERRORS IN STRICT MODE ===");
console.log("1. Duplicate parameter names (a, a) - SyntaxError");
console.log("2. Assigning to undeclared variable (total) - ReferenceError");
console.log("3. Deleting plain variable (delete total) - SyntaxError");

console.log("\n=== CORRECT ES6 VERSION ===");

"use strict";

function demoCorrect(a, b) {
    let total = 10;
    console.log(`Parameters: ${a}, ${b}`);
    console.log(`Total: ${total}`);
}

demoCorrect(5, 10);

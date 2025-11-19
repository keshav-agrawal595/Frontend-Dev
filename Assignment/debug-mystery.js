"use strict";

function showMessage() {
    let greeting = "Welcome";
    console.log(greeting);
}
showMessage();

console.log("\nExplanation:");
console.log("Without 'use strict': greeting becomes a global variable (implicit global)");
console.log("With 'use strict': ReferenceError thrown - all variables must be declared");
console.log("Fix: Declare greeting using let, const, or var");
console.log("Scope: greeting is now properly scoped to the function");

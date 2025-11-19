"use strict";

console.log("=== ORIGINAL CODE (BUGGY) ===");
console.log("This would produce:");
console.log("undefined (score is hoisted but not initialized)");
console.log("'Game started' (function announce is fully hoisted)");
console.log("ReferenceError (status in TDZ - let not hoisted value)");

console.log("\n=== FIXED VERSION ===");

var score = 50;
function announce() { 
    console.log("Game started"); 
}
let status = "ready";
function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();

console.log("\n=== ARROW FUNCTION VERSION ===");

var score2 = 50;
const announce2 = () => { 
    console.log("Game started"); 
};
let status2 = "ready";
const startGame2 = () => {
    console.log(status2);
};

console.log(score2);
announce2();
startGame2();

console.log("\n=== HOISTING EXPLANATION ===");
console.log("var: hoisted with undefined value");
console.log("function: fully hoisted (declaration + definition)");
console.log("let/const: hoisted but in TDZ until declaration line");
console.log("arrow functions: behave like variables (not hoisted if using const/let)");

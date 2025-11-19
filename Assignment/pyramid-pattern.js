"use strict";

const limit = 5;

console.log("=== USING LET ===");
for (let i = 1; i <= limit; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

console.log("\n=== USING VAR ===");
for (var i = 1; i <= limit; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

console.log("\nExplanation:");
console.log("let: block-scoped, new variable each iteration");
console.log("var: function-scoped, same variable reused");
console.log("Output is same but memory behavior differs");
console.log(`Outer limit: ${limit} rows`);

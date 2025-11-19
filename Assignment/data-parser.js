"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumeric = [];
const invalidNumeric = [];

apiData.forEach(value => {
    const asNumber = Number(value);
    const asBoolean = Boolean(value);
    const asString = String(value);
    
    console.log(`Original: ${value}`);
    console.log(`  Number: ${asNumber}, Boolean: ${asBoolean}, String: "${asString}"`);
    
    if (isNaN(asNumber) || value === " " || (typeof value === "string" && value.trim() !== "" && isNaN(Number(value.trim())))) {
        invalidNumeric.push(value);
        console.log(`  Status: INVALID`);
    } else if (value !== null && value !== undefined && value !== "") {
        validNumeric.push(asNumber);
        console.log(`  Status: VALID`);
    } else {
        invalidNumeric.push(value);
        console.log(`  Status: INVALID`);
    }
    console.log("---");
});

console.log("\n=== REPORT ===");
console.log(`Valid Numeric Data (${validNumeric.length}):`, validNumeric);
console.log(`Invalid Data (${invalidNumeric.length}):`, invalidNumeric);

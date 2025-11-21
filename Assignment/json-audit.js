const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];

rawData.forEach((entry, index) => {
    try {
        const parsed = JSON.parse(entry);
        
        if (!parsed.hasOwnProperty('user')) {
            throw new Error("Missing 'user' key");
        }
        
        if (!parsed.hasOwnProperty('age')) {
            throw new Error("Missing 'age' key");
        }
        
        parsed.age = Number(parsed.age);
        
        if (isNaN(parsed.age)) {
            throw new Error("Invalid age value");
        }
        
        if (parsed.age >= 18) {
            cleanData.push(parsed);
            console.log(`Line ${index + 1}: VALID - ${JSON.stringify(parsed)}`);
        } else {
            console.log(`Line ${index + 1}: FILTERED - User under 18`);
        }
        
    } catch (error) {
        errors.push({ line: index + 1, error: error.message, data: entry });
        console.error(`Line ${index + 1}: ERROR - ${error.message}`);
    }
});

console.log("\n=== AUDIT SUMMARY ===");
console.log(`Total entries: ${rawData.length}`);
console.log(`Valid entries: ${cleanData.length}`);
console.log(`Errors: ${errors.length}`);
console.log("\nClean Data:", cleanData);
console.log("Error Log:", errors);

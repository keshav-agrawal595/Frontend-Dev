const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

operations.forEach(operation => {
    try {
        let result;
        
        switch (operation) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "divide":
                if (num2 === 0) {
                    throw new Error("Cannot divide by zero");
                }
                result = num1 / num2;
                break;
            case "power":
                result = Math.pow(num1, num2);
                break;
            case "root":
                if (num1 < 0) {
                    throw new Error("Cannot calculate root of negative number");
                }
                result = Math.sqrt(num1);
                break;
            default:
                throw new InvalidOperationError(`Operation '${operation}' not recognized`);
        }
        
        console.log(`${operation.toUpperCase()}: ${num1} and ${num2} = ${result}`);
        
    } catch (error) {
        console.error(`${operation.toUpperCase()}: ERROR - ${error.message}`);
    }
});

console.log("\n=== SUMMARY ===");
console.log(`Operations tested: ${operations.length}`);
console.log(`Numbers used: ${num1}, ${num2}`);

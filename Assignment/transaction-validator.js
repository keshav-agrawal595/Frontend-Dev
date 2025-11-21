const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

transactions.forEach((transaction, index) => {
    try {
        if (transaction === null) {
            throw new Error("Null entry detected");
        }
        
        if (!transaction.hasOwnProperty('id')) {
            throw new Error("Missing id");
        }
        
        if (!transaction.hasOwnProperty('amount')) {
            throw new Error("Missing amount");
        }
        
        if (transaction.amount < 0) {
            throw new Error("Negative amount");
        }
        
        validTransactions.push(transaction);
        console.log(`Transaction ${index + 1}: VALID - ID: ${transaction.id}, Amount: ${transaction.amount}`);
        
    } catch (error) {
        invalidTransactions.push({ index: index + 1, error: error.message, data: transaction });
        console.error(`Transaction ${index + 1}: INVALID - ${error.message}`);
    }
});

console.log("\n=== FINAL REPORT ===");
console.log(`Successful Transactions: ${validTransactions.length}`);
console.log(`Failed Transactions: ${invalidTransactions.length}`);
console.log("\nValid Transactions:", validTransactions);
console.log("Invalid Transactions:", invalidTransactions);

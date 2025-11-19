function calculateExpenses() {
    let expenses = [
        parseFloat(document.getElementById('food').value),
        parseFloat(document.getElementById('travel').value),
        parseFloat(document.getElementById('rent').value),
        parseFloat(document.getElementById('bills').value),
        parseFloat(document.getElementById('leisure').value)
    ];

    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i];
    }

    let average = total / expenses.length;
    let totalWithTax = total + (total * 0.10);

    console.log("Total Expenses: " + total.toFixed(2));
    console.log("Average Expense: " + average.toFixed(2));
    console.log("Total with 10% Tax: " + totalWithTax.toFixed(2));
}

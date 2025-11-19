let bonus = 5000;

function calculateSalary() {
    let salary = 40000;
    let isPermanent = true;
    
    if (isPermanent) {
        let totalSalary = salary + bonus;
        console.log("Total Salary:", totalSalary);
    } else {
        console.log("Total Salary:", salary);
    }
}

calculateSalary();

console.log("Global bonus:", bonus);

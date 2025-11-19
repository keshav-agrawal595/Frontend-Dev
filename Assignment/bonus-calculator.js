"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

employees.forEach(emp => {
    try {
        const salary = Number(emp.salary);
        const years = Number(emp.years);
        
        if (isNaN(salary) || isNaN(years)) {
            throw new Error(`Invalid data for ${emp.name}`);
        }
        
        const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
        
        console.log(`Employee: ${emp.name}`);
        console.log(`Salary: ₹${salary.toLocaleString()}`);
        console.log(`Years of Service: ${years}`);
        console.log(`Bonus: ₹${bonus.toLocaleString()}`);
        console.log(`Total Compensation: ₹${(salary + bonus).toLocaleString()}`);
        console.log("---");
    } catch (error) {
        console.error(`Error processing employee: ${error.message}`);
    }
});

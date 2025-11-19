function calculateProjection() {
    let currentSalary = parseFloat(document.getElementById('currentSalary').value);
    let incrementRate = parseFloat(document.getElementById('incrementRate').value);

    let salaryData = [];

    for (let year = 1; year <= 5; year++) {
        currentSalary = currentSalary + (currentSalary * incrementRate / 100);
        salaryData.push({
            Year: year,
            Salary: Math.round(currentSalary)
        });
    }

    console.table(salaryData);
}

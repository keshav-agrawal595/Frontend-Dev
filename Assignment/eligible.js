function checkEligibility() {
    let age = parseInt(document.getElementById('age').value);
    let isCitizen = document.getElementById('isCitizen').checked;

    if (isCitizen && age >= 18) {
        if (age >= 18 && age <= 20) {
            console.log("Eligible to vote only.");
        } else {
            console.log("Eligible for all services.");
        }
    } else if (!isCitizen && age >= 18) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible yet.");
    }
}

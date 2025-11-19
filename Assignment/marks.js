function evaluatePerformance() {
    let marks = [
        parseFloat(document.getElementById('sub1').value),
        parseFloat(document.getElementById('sub2').value),
        parseFloat(document.getElementById('sub3').value),
        parseFloat(document.getElementById('sub4').value),
        parseFloat(document.getElementById('sub5').value)
    ];

    let total = 0;
    let isDetained = false;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
        if (marks[i] < 35) {
            isDetained = true;
        }
    }

    let average = total / marks.length;
    let percentage = (total / (marks.length * 100)) * 100;

    if (isDetained) {
        console.log("Detained");
    } else if (percentage >= 85) {
        console.log("Promoted with Distinction");
    } else if (percentage >= 50 && percentage < 85) {
        console.log("Promoted");
    } else {
        console.log("Detained");
    }
}

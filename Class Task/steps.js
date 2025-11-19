function checkGoal() {
    const steps = parseInt(document.getElementById('steps').value);
    const result = steps >= 10000 ? "Goal Achieved" : "Keep Going";
    const circle = document.getElementById('circle');
    
    document.getElementById('result').textContent = result;
    circle.className = steps >= 10000 ? 'progress-circle achieved' : 'progress-circle progress';
}

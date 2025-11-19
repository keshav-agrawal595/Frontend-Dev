let scores = [];
for (let i = 0; i < 8; i++) {
    scores.push(Math.floor(Math.random() * 71) + 30);
}

let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
let passed = scores.filter(score => score >= 50).length;

console.log("Scores:", scores);
console.log("Highest:", highest);
console.log("Lowest:", lowest);
console.log("Average:", average.toFixed(2));
console.log("Passed:", passed);

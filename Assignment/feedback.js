let feedback = "Great product! Fast delivery and amazing sound quality!";

let wordCount = feedback.split(" ").length;
console.log("Word Count:", wordCount);

if (feedback.includes("bad") || feedback.includes("poor")) {
    console.log("Needs Improvement");
} else {
    console.log("Positive Feedback");
}

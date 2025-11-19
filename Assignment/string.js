let productName = " wireless headphones PRO ";

let cleaned = productName.trim().toLowerCase();
let words = cleaned.split(" ");
let capitalized = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
let final = capitalized.replace("Pro", "Pro Edition");

console.log("Cleaned Title:", final);
console.log("Length:", final.length);

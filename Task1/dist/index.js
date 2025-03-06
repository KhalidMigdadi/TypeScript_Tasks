"use strict";
let num = 5;
if (num != 0) {
    num % 2 == 0 ? console.log("Even") : console.log("Odd");
}
else
    console.log("Zero is not even or odd");
let productsPrices = [99.99, 4.99, 10, 49.99, .99];
let thresholdPrice = 20;
for (let i = 0; i < productsPrices.length; i++) {
    if (productsPrices[i] < thresholdPrice) {
        continue;
    }
    else
        console.log(productsPrices[i]);
}
let numbers = [55, 20, 78, 99.9, 0.84];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

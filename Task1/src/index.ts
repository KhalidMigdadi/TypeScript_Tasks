// You are given a variable num Check whether the number is even or odd, without using a function.

let num: number = 5;

if (num != 0)
{
    num % 2 == 0 ? console.log("Even") : console.log("Odd");
}
else 
console.log("Zero is not even or odd");


// You are given an array of product prices. print out all prices that are higher than a given threshold price, without using a function.

let productsPrices: number[] = [99.99, 4.99, 10, 49.99, .99];

let thresholdPrice: number = 20;

for(let i: number = 0; i < productsPrices.length; i++)
{
    if(productsPrices[i] < thresholdPrice)
    {
        continue;
    }
    else 
    console.log(productsPrices[i]);
}


// You are given an array of numbers. Iterate through the array and print the sum of all elements , without using a function.
 let numbers: number[] = [55, 20, 78, 99.9, 0.84];

 let sum: number = 0;
 for(let i: number = 0; i < numbers.length; i++)
 {
    sum += numbers[i];
 }

 console.log(sum);
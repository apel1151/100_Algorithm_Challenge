// Question: write  a function that returns the sum of total numbers regardless of number of param. Use     arithmetic operator, rest operator and forEach() method.

/* *********************Answer************************ */

const sumNumbers = (...numbers) =>{
    let total = 0;
    numbers.forEach((element) =>{
         total += element; // add each number to the sum
    })

    return total;
}

console.log(sumNumbers(1, 2, 3, 4, 5, 6, 7));
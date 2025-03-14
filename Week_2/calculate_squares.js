// create a function that takes an array of numbers as input and creates a new array that is the square of each item of the input array

function calculateSquares(numbers) {
    return numbers.map(number => number * number);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(calculateSquares(numbers)); // Output: [1, 4, 9, 16, 25]

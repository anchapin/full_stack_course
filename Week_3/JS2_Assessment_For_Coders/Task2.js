// 1. Define 2 functions
// 1st function named as checkEven which will check if the num passed is even or not.
// 2nd function named as filterEvens which will take an array of numbers and the checkEven function as arguments.
// This filterEvens function will filter out  only even numbers using the checkEven function and generate a new array of the even numbers.

let checkEven = function(num) {
    return num % 2 === 0;
}

let filterEvens = function(arr, func) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

//2. Write an IIFE that calculates the factorial of a given number and immediately logs the result to the console.

(function(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    console.log(factorial);
})(5); 

//3. The product1 object (which is already given) consists of title, price and category information of Nike Shoes.
// The description() function describes the product using its properties.
// Your task is to create a product2 object which consists of the title, price and category information of Sony TV.
// Next, use the call() method to invoke the description() method of product1 on product2.
// This should display the details of product2 on the console. 
var product1 = {
    title: "Nike Shoes",
    price: 30,
    category: "Shoes",
    description: function (){
        return "Title: " + this.title + " Price: " + this.price + " Category: " + this.category;
    }
}
var product2 = {
    title: "Sony TV",
    price: 500,
    category: "Electronics",
}
console.log(product1.description.call(product2, null)); 

//4. Given an array of person objects, define a function to find oldest person object.

persons = [{"name" : "Harry", "age" : 12}, {"name" : "Ron", "age" : 11}, {"name" : "Hermione", "age" : 13}]

function findOldestPerson(persons) {
    let oldestPerson = persons[0];
    for (let i = 1; i < persons.length; i++) {
        if (persons[i].age > oldestPerson.age) {
            oldestPerson = persons[i];
        }
    }
    return oldestPerson;
}

//5.  Create a function that calculates the sum of an array using IIFE function and returns it.

(function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
})([1, 2, 3, 4, 5]); 

//6. Write a function printContext that, when invoked, logs the this keyword to the console. Then, demonstrate how the context of a function can change when calling it with different objects using the call method.

let printContext = function() {
    console.log(this);
}
let obj = {name: "Hermione"};
let arr = [1, 2, 3];
printContext();
printContext.call(obj);
printContext.call(arr);

//7. Create a function multiply that takes two parameters and returns their product. Use the bind method to create a new function "double" that multiplies a single parameter by 2.

let multiply = function(a, b) {
    return a * b;
}
let double = multiply.bind(null, 2); 

// 8. Create an object person with properties name and age. Write a function "introduce" that logs a message introducing the person. Then, use the call method to invoke the introduce function with the person object as the context.

let person = {name: "Hermione", age: 13};
let introduce = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
}
introduce.call(person); 

// 9. Write a higher order function createMultiplier that takes a factor as an argument and returns another function that multiplies a number by that factor. 

let createMultiplier = function(factor) {
    return function(num) {
        return num * factor;
    }
}


// 10. Write a function called "calculate" that adds two numbers and assign a property "description" to it with a string describing what the function does. Then, access and log this property.

let calculate = function(a, b) {
    return a + b;
}
calculate.description = "This function adds two numbers.";
console.log(calculate.description); 

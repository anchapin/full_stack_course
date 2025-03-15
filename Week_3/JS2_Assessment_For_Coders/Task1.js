// 1. Define and invoke an anonymous function square() which takes a number and returns its square.
// If input is 2, output should be 4.

const square = function (num) {
    return num * num;
};

console.log(square(2));

// 2. Define an IIFE function which takes a personName as input and displays a greeting message containing the personName.
// If input is "Harry", output should be "Hello Harry, Welcome to Great Learning!"

(function (personName) {
    console.log(`Hello ${personName}, Welcome to Great Learning!`);
})("Harry");

// 3. Define a global array variable containing 3 numbers. 
// Define a function which increments the value of each of the elements of this array by 2. 
// Display the array after you have invoked this function.

let numbers = [1, 2, 3];

function incrementArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 2;
    }
}

incrementArray(numbers);
console.log(numbers);

// 4. Create a "course" object having following information - 
// courseName as "Computer Science", durationInMonths as 24, level as "Beginner". 
// Display object information.
// Change the value of level as "Intermediate". 
// Display object information again.

let course = {
    courseName: "Computer Science",
    durationInMonths: 24,
    level: "Beginner"
};

console.log(course);
course.level = "Intermediate";
console.log(course);

// 5. Given an array "students" which is a collection of javascript objects where each object consists of information regarding one student. Write a code to iterate through each of these objects and extract first name and last name of each student.

var students = [
    { firstName: "Harry", lastName: "Potter", house: "Slytherin" },
    { firstName: "Ron", lastName: "Weasley", house: "Gryffindor" },
    { firstName: "Hermione", lastName: "Granger", house: "Gryffindor" }
];

for (let i = 0; i < students.length; i++) {
    console.log(students[i].firstName, students[i].lastName);
}

// 6. Given a function doubleNumber which takes a number as an argument and returns its double value.
// Write a function which takes 2 arguments- 1st an array of numbers and 2nd the doubleNumber function as a callback function
// This function should iterate through each of the array number and use the doubleNumber function to double it.
// In the end it should display the updated array.
// We are not supposed to create a new array. We just need to update the existing array.

function doubleNumber(num) {
    return num * 2;
}

function doubleArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
    }
    console.log(arr);
}

// 7. Implement a function called `multiplyBy` that multiplies a number by a specific factor using an IIFE (Immediately Invoked Function Expression).
// Hence, the IIFE function should return a function which should do the multiplication operation.


const multiplyBy = (function (factor) {
    return function (num) {
        return num * factor;
    };
})(2);

//8. Using the `apply` method, write a function that finds the maximum number in an array. You can use Math class's built-in max() method for this task.

function findMax(arr) {
    return Math.max.apply(null, arr);
} 

//9. Declare an object named "car" with an empty object as its initial value. 
// Add the properties "make" and "model" with values "Toyota" and "Camry" respectively.

let car = {};
car.make = "Toyota";
car.model = "Camry";

//10. Given an array "students" which is a collection of JavaScript objects where each object consists of information regarding one student.  
// Define a function displayByKey() which takes this array of objects and a keyName(as string) as arguments and displays the value of the key for each of the JavaScript objects.
var students = [
    { firstName: "Harry", lastName: "Potter", house: "Slytherin" },
    { firstName: "Ron", lastName: "Weasley", house: "Gryffindor" },
    { firstName: "Hermione", lastName: "Granger", house: "Gryffindor" }
];

function displayByKey(arr, keyName) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i][keyName]);
    }
}

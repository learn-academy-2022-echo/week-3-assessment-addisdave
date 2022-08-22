// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
// TDD
// RED
// 1- Write the test
// 2- Run a test "yarn jest" to see failed test. 

describe("number", () => {
    it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
      expect(number()).toEqual("numbers of the Fibonacci sequence")
    })  
})

//  FAIL  jest-dawit/jest.test.js
  // ● number › returns an array that length containing the numbers of the Fibonacci sequence

  // ReferenceError: number is not defined

// GREEN
// 3- Write the code 

//Psudocode:
// Write a function called fibLength1
// Parameter is Fibonacci numbers of 6.
// Expected out put of an array containg the following numbers [1, 1, 2, 3, 5, 8]

//const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength1 = (6) => {
  let myFibs = [1,1], i=1, a=1,b=0; b < 6; 
     i=a, a=c, b++ 
     myFibs.push(c)
     
} 
console.log(fibLength1.myFibs())

// Failed

// FAIL  jest-dawit/jest.test.js
// ● Test suite failed to run
//   Your test suite must contain at least one test.




//const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

TDD
// RED
// 1- Write the test
// 2- Run a test "yarn jest" to see failed test. 

describe("number", () => {
    it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
      expect(number()).toEqual("numbers of the Fibonacci sequence")
    })  
})

//  FAIL  jest-dawit/jest.test.js
  // ● number › returns an array that length containing the numbers of the Fibonacci sequence

  // ReferenceError: number is not defined

// b) Create the function that makes the test pass.

const fibLength1 = (10) => {
  let myFibs = [1,1], i=1, a=1,b=0; b < 10; 
     i=a, a=c, b++ 
     myFibs.push(c)
     
} 
console.log(fibLength1.myFibs())



// *** couldl not go further than this on the coding challeges *** On the yarn jest run test, I kept getting
// the jason.file not found error eventhogh i am in the right directory (repositoriy)




// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.



//const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

TDD
// RED
// 1- Write the test
// 2- Run a test "yarn jest" to see failed test.

// GREEN
// 3- Write the code 

//Psudocode:
// Write a function called fullArr2
// Input are numbers and string.
// expected outout [-9, 7, 9, 199]

//const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

//const numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]

/ RED
// 1- Write the test
// 2- Run a test "yarn jest" to see failed test.

// GREEN
// 3- Write the code 

//Psudocode:
// Write a function called numbersToAdd2
// Input are numbers.
// expected outout [0, 7, -1, 11]

//const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

//const numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.

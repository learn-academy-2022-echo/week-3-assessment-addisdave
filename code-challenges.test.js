// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// a describe method that lists the name of the function OR naming of the particular test.
// describe("hello", () => {
//   // a test/it method, nested within the describe block, that in plain words, describes that the function does.
//   it("returns a string that says hi", () => {
//     //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
//     expect(hello()).toEqual("hi");
//   });
// });

// --------------------1) Create a function and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
// TDD
// RED


// 1- Write the test
// 2- Run a test "yarn jest" to see failed test. 

describe("number", () => {

    it("Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
    const fibLength1 = 6
     // Expected output: [1, 1, 2, 3, 5, 8]
    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

      expect(number(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
      expect(number(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })  
})

// b) Create the function that makes the test pass.

const number = (nums) => {
  let myFibs = [0,1];
    for (let i=2;
       i <= nums; 
       i++) {
      myFibs.push(myFibs[i-2] + myFibs[i-1])
    } 
     return myFibs.slice(1)
     
} 

// PASS  ./code-challenges.test.js
// number
// ✓ Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence. (3 ms)





// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a describe method that lists the name of the function OR naming of the particular test.
// d

// a) Create a test with expect statements for each of the variables provided.

describe("oddNum", () => {
  it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
   // Expected output: [-9, 7, 9, 199]
   const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
   // Expected output: [-823, 7, 23]

   expect(oddNum(fullArr1)).toEqual([-9, 7, 9, 199])
   expect(oddNum(fullArr2)).toEqual([-823, 7, 23])
   

  })

})


// FAIL  ./code-challenges.test.js
// number
//   ✕ Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence. (1 ms)
// oddNum
//   ✕ takes in an array and returns a new array of only odd numbers sorted from least to greatest (3 ms)77

// b) Create the function that makes the test pass.

const oddNum = (array) => {
  let newArr =[]
  for(i = 0; i < array.length; i++){
      if(array[i] % 2 !== 0 && typeof array[i] === 'number')
      newArr.push(array[i])
  }
  return newArr.sort((a,b) => a-b)
}

// PASS  ./code-challenges.test.js
// number
//   ✓ Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence. (3 ms)
// oddNum
//   ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest (1 ms)


// ****** still working on it. 

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// describe("hello", () => {
//     // a test/it method, nested within the describe block, that in plain words, describes that the function does.
//     it("returns a string that says hi", () => {
//       //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
//       expect(hello()).toEqual("hi");
//     });
//   });

// a) Create a test with expect statements for each of the variables provided.


// describe("sumArray", () => {
//   it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
const numbersToAdd1 = [2, 4, 45, 9]
//  Expected output: [2, 6, 51, 60]
const numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]
const numbersToAdd3 = []
// // Expected output: []

// expect(sumArray(numbersToAdd1)).toEqual([2, 6, 51, 60])
// expect(sumArray(numbersToAdd2)).toEqual([0, 7, -1, 11])
// expect(sumArray(numbersToAdd3)).toEqual([])

//   })
// }) 

// FAIL  ./code-challenges.test.js
// number
//   ✕ Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence. (1 ms)
// oddNum
//   ✕ takes in an array and returns a new array of only odd numbers sorted from least to greatest
// sumArray
//   ✕ takes in an array and returns an array of the accumulating sum. An empty array should return an empty array. (1 ms)

// b) Create the function that makes the test pass.

const sumArray = (array) => {
  let newArr =[(numberstoAdd1 + numberstoAdd2 + numberstoAdd3)];
  return newArr.sort((a,b) => a-b)
}



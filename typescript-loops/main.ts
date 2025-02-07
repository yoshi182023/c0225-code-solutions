/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            sumArray,
            reverseString,
            getKeys,
            getValues
 */
// Define a function named getNumbersToTen (with no parameters) that:
const getNumbersToTe = (): number[] => {
  // assigns an empty array to a new variable named numbers
  const numbers: number[] = [];
  // assigns 1 to a new variable named currentNumber
  let currentNumber = 1;
  // uses a while loop to loop through the numbers 1 to 10 and for each of them:
  let index = 0;
  while (index < 10) {
    // pushes currentNumber into the numbers array
    numbers.push(currentNumber);
    // increments currentNumber
    currentNumber++;
    index++;
  }
  return numbers;
};
// returns the numbers array after the loop terminates
console.log('getNumbersToTe', getNumbersToTe());
const getEvenNumbersToTwenty = (): number[] => {
  const evenNumbers: Array<number> = [];
  let currentNumber = 2;
  // uses a while loop to loop through the numbers 2 to 20 and for each of them:
  while (currentNumber <= 20) {
    // pushes currentNumber into the evenNumbers array
    evenNumbers.push(currentNumber);
    // increases the value of currentNumber by 2
    currentNumber += 2;
  }
  return evenNumbers;
};
console.log('getEvenNumbersToTwenty', getEvenNumbersToTwenty());
// Define a function named repeatWord with two parameters: word and times.
// This function should:
// assign 1 to a new variable named count
// assign an empty string '' to a new variable named repeated

const repeatWord = (word: string, times: number): string => {
  let count = 1;
  let repeated = ' ';
  // uses a while loop to loop through the numbers from count to times and for each of them:
  // updates the value of repeated to include the word
  while (count <= times) {
    // increments count
    // return the repeated string after the loop terminates.
    repeated += word;
    count++;
  }
  return repeated;
};
console.log('repeat word:', repeatWord('javascript', 30));

const logEachCharacter = (str: any): any => {
  // use a for loop that assigns 0 to a new variable named i in its initialization expression
  for (let i = 0; i < str.length; i++) {
    console.log('value of str', str[i]);
  }
};
console.log('javascript');

// Define a function named doubleAll with one parameter:
// numbers (which will be an array of numbers). This function should:
function doubleAll(numbers: Array<number>): Array<number> {
  const doubled: Array<number> = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('doubled', doubleAll([5, 7, 9, 11]));

const sumArray = (numbers: Array<number>): number => {
  // assign 0 to a new variable named sum
  let sum = 0;
  // use a for..of loop to iterate over each number in the numbers array
  for (const num of numbers) {
    // add each number to the sum variable and update the sum variable with the result
    sum += num;
  }
  return sum;
};
console.log('sumArray', sumArray([4, 7, 1]));
// Define a function named reverseString with one parameter:
// str (which will be a string). This function should:
function reverseString(str: string): string {
  // assign an empty string '' to a new variable named reversed

  let reversed = ' ';
  // use a for..of loop to iterate over each character in the str string

  for (const character of str) {
    // add each character to the reversed string !!!!
    // and update the reversed string with the result!!!!
    reversed = character + reversed;
  }
  // return the reversed string
  return reversed;
}

// Test reverseString a few times in the console with different strings
// and inspect each result to make sure it is returning what you expected.
console.log('test mia Gong:', reverseString('Mia Gong'));
// In order to complete the final two functions,
// we need to utilize the record utility type.
// here is how you will need to type your parameters for the next couple functions.
// Define a function named getKeys with one parameter: obj. This function should:
function getKeys(obj: Record<string, unknown>): string[] {
  const keys: string[] = [];
  // use a for...in loop to get each property key of the input obj and push it into the keys array
  for (const key in obj) {
    keys.push(key);
  }
  return keys;
}

// return the keys array
// NOTE: You will need to utilize the Record utility type to complete this.

// NOTE: This function should not use the Object.keys() or Object.entries() methods.

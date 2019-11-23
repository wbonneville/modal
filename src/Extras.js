import React, { useState } from "react";

// longestWord takes string as an argument
export default function longestWord(str) {
  // string is split up into words
  // space indicates where to split
  let words = str.split(" ");
  // longestWord set to empty string
  let longestWord = "";
  // loop through words
  for (let word of words) {
    // for each loop, if the length of the word is greater than the longest word, set longest word = to word
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  // returns the longest word
  return longestWord;
}

export function longestWords(str) {
  // split up sentence into words
  let words = str.split(" ");
  // each word has a size
  let size = 0;
  // max = array with empty string
  let max = [""];

  // loop through the array of words
  for (let i = 0; i < words.length; i++) {
    // if first words length is greater than or equal to size...

    if (words[0].length >= size) {
      // ... size = the words length. ex. size = 5
      size = words[i].length;
      // if max is less than words length...
      if (max[max.length - 1].length < words[i].length) {
        // ...max set to empty array
        max = [];
        // push the new longest word into max array
        max.push(words[i]);
        // otherwise, max = max and longest word
      } else {
        max = [...max, words[i]];
      }
    }
  }

  return [...max];
}

// take str as argument
export function capitalizeWords(str) {
  // split string into words. loop through each word and perform given function...
  let words = str.split(" ").map(word => {
    // use slice to access index 0 to 1 of each word
    let firstLetter = word.slice(0, 1);
    // use slice to access rest of letters (starting from index 1)
    let rest = word.slice(1);
    // first letter set equal to first letter set toUpperCase
    firstLetter = firstLetter.toUpperCase();
    // concatenation -- first letter(0-1) + rest (1++)
    // array is returned
    return `${firstLetter}${rest}`;
  });
  // reverse of split is join. join two arrays together and space out the words with " "
  return words.join(" ");
}

export function capitalizeWordsTwo(str) {
  // split string into words. loop through each word and perform given function...
  let words = str.split(" ").map(word => {
    // get 0 index of word, transform it to uppercase, and then add the rest of the letters using the splice method
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  // join the two arrays and space out the words with (" ")
  return words.join(" ");
}

function ArraySum(arr) {
  // tempArray = arr sorted lowest to highest
  // callback function
  let tempArray = arr.sort((a, b) => {
    // b - c would indicate highest to lowest
    return a - b;
  });
  // largest number = last number in temp array
  let largest = tempArray.pop();
  // number = 0...
  let number = 0;
  // for each item (number) in temp array, add it to the number
  tempArray.forEach(item => (number += item));
  // return largest === number
  // if largest is === to number -- true, else, false
  if (largest === number) {
    console.log("DO NOT FEED FATTY");
  } else {
    console.log("It's okay to feed fatty");
  }
  return largest === number;
}

console.log(ArraySum([1, 3, 4]));

// take arr of numbers as argument
function mathSequences(arr) {
  // unique value sets
  // a set can't contain two of the same value
  let arith = new Set();
  let geo = new Set();

  // loop through the length of the array
  // i set to first index of array
  for (let i = 1; i < arr.length; i++) {
    // let number 1 = index - previous index
    let number1 = arr[i] - arr[i - 1];
    // add the number to arith Set
    arith.add(number1);
    // let number 2 = index / previous index
    let number2 = arr[i] / arr[i - 1];
    // add the number to geo set
    geo.add(number2);
  }
  // if the arithmetic Set only has one value, it's arithmetic
  if (arith.size === 1) {
    return "This set is arithmetic";
  }
  // if the geometric Set has only one value, it's geometric
  if (geo.size === 1) {
    return "This set is geometric";
  }
  // if the set of numbers is neither arithmetic or geometric, return -1
  return -1;
}

// take celsius as argument
function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

convertToF(30);

// REVERSE STRING

// take str as argument
function reverseString(str) {
  // split str into words and put it into an array
  var array = str.split("");
  // reverse array of words
  var reverseArray = array.reverse();
  // join the array again ([b], [a]) = to [ba]
  var joinArray = reverseArray.join("");
  return joinArray;
}

reverseString("hello");

// FACTORIALIZE NUMBER

// take num as argument
function factorialize(num) {
  // while num is greater than zero
  // loop backwards
  for (var answer = 1; num > 0; num--) {
    // set answer = num * answer
    answer = num * answer;
    // if num(argument) = 10...
    // answer = 10 * 1
    // answer = 9 * 10
    // answer = 8 * 90
    // etc
  }
  return answer;
}

factorialize(5);

// FIND LENGTH OF LONGEST WORD IN A STR

// take str as argument
function findLongestWordLength(str) {
  // split up string into words that are separated by " "
  let words = str.split(" ");
  // baseline of longest word set to 0
  let longest = 0;
  // for each word in words array
  for (let word of words) {
    // if the word.length is longer than 0..
    if (word.length > longest) {
      // set the longest word = to word.length
      longest = word.length;
      // repeat
    }
  }
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// FIND THE LARGEST NUMBER OUT OF ALL ARRAYS

// take array of arrays as an arguement
function largestOfFour(arr) {
  // baseline largest number = 0
  let largest = 0;
  // loop through arrays
  for (let i = 0; i < arr.length; i++) {
    // loop through items in each array
    for (let j = 0; j < arr[i].length; j++) {
      // if iteration of item inside item is larger than largest (0)...
      if (arr[i][j] > largest) {
        // ...let largest = to selected iteration of item
        largest = arr[i][j];
        // repeat unti largest number is found
      }
    }
  }
  return largest;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

// FIND LARGEST NUMBER FROM EACH ARRAY

// take array as an argument
function largestOfFourTwo(arr) {
  // largest set to array full of zeros
  let largest = [0, 0, 0, 0];
  // loop through array of arrays
  for (let i = 0; i < arr.length; i++) {
    // loop through then numbers in each array in the array
    for (let j = 0; j < arr[i].length; j++) {
      // if an element is larger than all of the elements inside largest
      if (arr[i][j] > largest[i]) {
        // largest[i] = element
        largest[i] = arr[i][j];
        // repeat
      }
    }
  }
  return largest;
}

largestOfFourTwo([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

// initial expenses set to array of objects
const initialExpenses = [{ amount: 10 }, { amount: 10 }, { amount: 10 }];
// function
export const AddFunction = () => {
  // use state hook
  // expenses stores state
  // setExpenses is a function that manipulates state
  const [expenses, setExpenses] = useState(initialExpenses);

  return (
    <h1>
      total expenses = ${/* add up all amounts */}
      {/* two arguments: accumulator and current */}
      {expenses.reduce((acc, curr) => {
        // return total
        // curr.amount selects amount object
        return (acc = curr.amount + acc);
      }, 0)}
    </h1>
  );
};

function confirmEnding(str, target) {
  var end = str.substring(str.length - 1);
  let end2 = target.substring(target.length - 1);
  if (end === end2) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "pedsdsdsdsdsdadsdade");

function confirmEndingTwo(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

function repeatStringNumTimes(str, num) {
  let output = "";
  for (let i = 0; i < num; i++) {
    output = str + output;
  }
  if (num < 0) {
    return "";
  } else {
    return output;
  }
}

repeatStringNumTimes("abc", 3);

function truncateString(str, num) {
  if (str.length > num) {
    var truncated = str.substring(0, num);
    return truncated + "...";
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

function findElement(arr, func) {
  let num = 0;

  for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

function booWho(bool) {
  return bool === false || bool === true;
}

booWho(null);

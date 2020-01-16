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
  // current or default max = array with empty string
  let max = [""];

  // loop through the array of words
  for (let i = 0; i < words.length; i++) {
    // if first words length is greater than or equal to size (0)...
    if (words[0].length >= size) {
      // ... set size = the words length. ex. size = 5
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
    // use slice to access rest of letters (index 1 and onwards)
    let rest = word.slice(1);
    // first letter set equal to first letter set toUpperCase
    firstLetter = firstLetter.toUpperCase();
    rest = rest.toLowerCase();
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
    // charAt: select a character at a given index
    // return the words first character (now uppercase), plus the word from index 1 and onwards
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
  // in this case, the highest number
  // pop() pops off the last index in an array
  let largest = tempArray.pop();
  // number = 0...
  let number = 0;
  // for each item (number) in temp array, add it to the number
  tempArray.forEach(item => (number += item));
  // return largest === number
  // if largest is === to number -- true, else, false
  return number;
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

// USESTATE HOOK TO ADD UP VALUES IN OBJECT

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
        // accumulator is total returned value which is returned at the end
        // curr is the current element being processed in the iteration
        return (acc = curr.amount + acc);
      }, 0)}
      {/* 0 is initial value */}
      {/* 0 could be initialValue if (let initalValue = 0) is declared above */}
    </h1>
  );
};

// CONFIRM THE TARGET VALUE IS EQUAL TO THE END OF A GIVEN STR

// two arguments: str and target value
function confirmEnding(str, target) {
  // use substring method on str to retrieve the last element in the str
  var end = str.substring(str.length - 1);
  // get the last element of the target using the same method prescribed above
  let end2 = target.substring(target.length - 1);
  // if the ends are congruent...
  if (end === end2) {
    // ...return true
    return true;
    // else return false
  } else {
    return false;
  }
}

// this should be false
confirmEnding("Enlil", "Enki");

// this should be true
confirmEnding("Enlil", "Ninlil");

function confirmEndingAndBeginning(str, target) {
  // use substring method on str to retrieve the last element in the str
  var beginningStr = str.substring(0, 1);
  var endStr = str.substring(str.length - 1);
  // get the last element of the target using the same method prescribed above
  var beginningStr2 = target.substring(0, 1);
  let endStr2 = target.substring(target.length - 1);
  // if the ends are congruent...
  if ((beginningStr === beginningStr2) & (endStr === endStr2)) {
    // ...return true
    return true;
    // else return false
  } else {
    return false;
  }
}

// this should be false
confirmEndingAndBeginning("Enlil", "Enki");

// this should be false
confirmEndingAndBeginning("Enlil", "Ninlil");

// this should be true
confirmEndingAndBeginning("Enlil", "Eral");

// CONFIRM ENDING TWO (ONE-LINER)
function confirmEndingTwo(str, target) {
  // slice off ends of each string and compare them
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

// REPEAT A STRING X TIMES

// two arguments: string and number

function repeatStringNumTimes(str, num) {
  // let result = empty string
  let result = "";
  // while i is less than the number input by the user
  for (let i = 0; i < num; i++) {
    // set result = to the string
    result = str + result;
  }
  // if the num is less than 0, return an empty string
  if (num < 0) {
    return "";
    // otherwise, return the string
  } else {
    return result;
  }
}

repeatStringNumTimes("abc", 3);

// TRUNCATE (SHORTEN) A STRING
// takes two arguments: string + number

function truncateString(str, num) {
  // if the length of the string is greater than the number that was input...
  if (str.length > num) {
    // use substring method to return elements from index 0 to number input by user
    var truncated = str.substring(0, num);
    // append "..." to the string
    return truncated + "...";
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// FIND ELEMENT IN A STRING

// takes an array and a function as an argument
// return first element that passes the test
function findElement(arr, func) {
  // set num to zero
  let num = 0;
  // loop through the array
  for (var i = 0; i < arr.length; i++) {
    // set num = to the iteration in the array
    num = arr[i];
    // then pass that number into the function
    if (func(num)) {
      // return that num if it can be divided by 2
      // there can't be a remainder
      return num;
    }
  }
  // if can't be divided by 2, return undefined
  return undefined;
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

// RETURN TRUE IF ARGUMENT IS A BOOLEAN

function booWho(bool) {
  // use ternary for or: ||
  // return if bool === false or bool === true
  return bool === false || bool === true;
}

booWho(null);

// CAPITALIZE FIRST LETTER OF EACH WORD

function titleCase(str) {
  /// split the str into words and make them lowercase
  var convertToArray = str.toLowerCase().split(" ");
  // map over each world
  var result = convertToArray.map(val => {
    // replace each words first character with the same character but uppercase
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  // coalesce the words into a string again
  return result.join(" ");
}

titleCase("I'm a little tea pot");

// add contents of second array to first array

function frankenSplice(arr1, arr2, n) {
  let array = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    array.splice(n, 0, arr1[i]);
    n++;
  }
  return array;
}

frankenSplice([1, 2, 3], [4, 5, 6], 0);

// EJECT FALSE VALUES

// take argument of arr
// set new array equal to empty array
function bouncer(arr) {
  let newArray = [];
  // for each element in the arr...
  // if an iteration content is true, push the iterations content into the new array
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) newArray.push(arr[i]);
  }
  // return array
  return newArray;
}
// empty string is a falsey value
// false is false
bouncer([7, "ate", "", false, 9]);

// INTERPOLATE AN ELEMENT
function getIndexToIns(arr, num) {
  // sort numbers smallest to largest
  arr.sort((a, b) => {
    return a - b;
  });

  // loop over numbers
  // if the current item of the iteration is less than or equal to the number
  // return the index where the item would go
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }
  // return the array
  return arr.length;
}

// in this case, 50 would belong to the first index
// 1 is returned (40, 50, 60)
getIndexToIns([40, 60], 50);

// BASIC RECURSION

// takes two arguments, array and number
function sum(arr, n) {
  // if number is less then or equal to 0
  if (n <= 0) {
    // return arr[0]
    return arr[0];
    // else
  } else {
    // return function
    // arr, number - 1 plus arr and number
    return sum(arr, n - 1) + arr[n];
  }
}

// RECURSION RANGE OF NUMBERS

// take number as argument
function count(n) {
  // baseline
  // if number is equal to one, return 1
  if (n === 1) {
    // return 1...
    return [1];
    // else
  } else {
    // set numbers = function(number - 1)
    var numbers = count(n - 1);
    // push number into function
    numbers.push(n);
    // function repeats until 1 is reached
    return numbers;
  }
}

// count(3) returns [1, 2, 3]

// RECURSION RANGE OF NUMBERS

// function takes two numbers as arguments
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    // numbers = function(a, b -1)
    // 1 is subtracted from endNum until endNum - startNum is = to 0
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    // add each new number to numbers
    numbers.push(endNum);
    // repeat
    return numbers;
  }
}

// rangeOfNumbers(3, 6) should return [3, 4, 5, 6]
// 3, 6 - 1 = [3], 3, 5 - 1 = [4], 4 - 1 = [3]
// 5 and 4 and 3 and pushed to numbers. 3 - 3 = 0 -- recursion stops
// end

// RECURSION

function countdown(myArray, n) {
  if (n <= 0) {
    return;
  } else {
    myArray.push(n);
    countdown(myArray, n - 1);
  }
}

function quickCheck(arr, elem) {
  // change code below this line
  if (arr.indexOf(elem) >= 0) {
    return true;
  } else {
    return false;
  }
  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9]
    ],
    3
  )
);

let myNestedArray = [
  // change code below this line
  [
    [
      "deep",
      [
        "deeper",
        ["unshift", "deepest", false, 1, 2, 3, "complex", "nested"],
        ["loop", "shift", 6, 7, 1000, "method"],
        ["concat", false, true, "spread", "array"],
        ["mutate", 1327.98, "splice", "slice", "push"],
        ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth"]
        // change code above this line
      ]
    ]
  ]
];

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;

console.log(foods);

let foodsTwo = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// do not change code above this line

function checkInventory(scannedItem) {
  // change code below this line
  scannedItem = foods[scannedItem];
  return scannedItem;
}

let foodsThree = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// one liner

["oranges", "plums", "strawberries"].forEach(item => delete foods[item]);

// or delete foods.oranges

console.log(foods);

let exist = {
  savage: {
    age: 4000
  }
};

function doesThisKeyExist(obj) {
  // change code below this line
  if ("age" in exist.savage) {
    return true;
  }
  // or
  // exist.hasOwnProperty('age');
  // hasOwnProperty is a method
}

console.log(doesThisKeyExist(exist));

function isEveryoneHere(obj) {
  if (
    obj.hasOwnProperty("Alan") &&
    obj.hasOwnProperty("Jeff") &&
    obj.hasOwnProperty("Sarah") &&
    obj.hasOwnProperty("Ryan")
  ) {
    return true;
  }
  return false;
}

let usersObj = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
};

function countOnline(usersObj) {
  // change code below this line
  number = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      ++number;
    }
  }
  return number;

  // change code above this line
}

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // change code below this line
  return Object.keys(obj);
  // change code above this line
}

console.log(getArrayOfUsers(users));

let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo", "Skree", "Ree"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA"
    }
  }
};

function addFriend(userObj, friend) {
  // change code below this line
  let friends = userObj.data.friends;
  friends[friends.length] = friend;
  return friends;
  // change code above this line
}

console.log(addFriend(user, "Pete"));

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for (let prop in canary) {
  if (canary.hasOwnProperty(prop)) {
    ownProps.push(prop);
  }
}

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 31;

// Add your code above this line
let beagle = new Dog("Snoopy");

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line

for (let prop in beagle) {
  if (beagle.hasOwnProperty(prop)) {
    ownProps.push(prop);
  } else {
    prototypeProps.push(prop);
  }
}

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Add your code below this line

Dog.prototype.isPrototypeOf(beagle);

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Add your code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom"

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() {}

// Add your code below this line

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat(); // Should print "nom nom nom"

// IIFE (Immediately Invoked Function Expression)
// has no name
// is invoked immediately

(function() {
  console.log("A cozy nest is ready");
})();

function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

// convert miles to kilometers

function milesToKilometers(num) {
  return num * 1.609347218694;
}

milesToKilometers(34);

// break up array into chunks of the size indicated within the argument
function chunkArrayInGroups(arr, size) {
  // empty array
  let newArr = [];
  // loop through the length of the array
  // i is equal to the size plus an iteration
  for (var i = 0; i < arr.length; i += size) {
    // slice indexes off of arr from index of first iteration to indicated size and push it into newArr
    newArr.push(arr.slice(i, i + size));
  }
  // return newArr
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 2);

// should result in [[a,b], [c, d]]

// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].

// functional programming

// fixed value is fixed

// the global variable
var fixedValue = 4;

function incrementer() {
  // Add your code below this line
  return fixedValue + 1;

  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4

// now pass it in as an argument
// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer(fixed) {
  return fixed + 1;

  // Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4

// Implement map on a prototype solution 1

var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Add your code below this line
  this.forEach(a => newArray.push(callback(a)));
  // Add your code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

// implement map on a prototype solution 2

var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];

  // Add your code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  // Add your code above this line

  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

// FILTER A LIST, AND THEN MAP THROUGH IT

// 1. Not the most optimal way

var filteredRatingList = watchList.filter(item => item.imdbRating >= 8.0);

var filteredList = filteredRatingList.map(itemTwo => ({
  title: itemTwo["Title"],
  rating: itemTwo["imdbRating"]
}));

// 2. another way

// map through watchList and return the title and the rating
var filteredList = watchList
  .map(movie => {
    return {
      title: movie.Title,
      rating: movie.imdbRating
    };
  })
  // filter through the map function and return only movies with a rating above 8.0
  // parse float turns string into number
  .filter(movie => {
    // return true it will keep the item
    // return false it will reject the item
    return parseFloat(movie.rating) >= 8.0;
  });

// Implement the filter Method on a Prototype
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];
  // Add your code below this line
  // x = item
  this.forEach(function(x) {
    if (callback(x) == true) {
      newArray.push(x);
    }
  });
  // Add your code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

// Function for slicing

function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line
  return anim.slice(beginSlice, endSlice);

  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

// Another function for slicing

function nonMutatingSplice(cities) {
  // Add your code below this line
  return cities.slice(0, 3);

  // Add your code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

// function for concatenation

function nonMutatingConcat(original, attach) {
  // Add your code below this line
  return original.concat(attach);

  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);

// push, like splice, would mutate the array

function nonMutatingPush(original, newItem) {
  // push alters array
  // return original.push(newItem);
  // concat returns a new array!
  return original.concat(newItem);
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);

// here's how to filter through a list of movies

// the global variable
var watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    Plot:
      "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
    Response: "True"
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    Metascore: "74",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
    Response: "True"
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    Metascore: "82",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
    Response: "True"
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot:
      "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    Metascore: "70",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
    Response: "True"
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot:
      "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
    Poster:
      "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    Metascore: "83",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
    Response: "True"
  }
];

function getRating(watchList) {
  // Add your code below this line

  // var averageRating = watchList.reduce((obj, item, count) =>  obj + parseFloat(item.imdbRating), 0
  // )

  var nolanMovies = watchList.filter(item => {
    return item.Director === "Christopher Nolan";
  });

  var averageRating =
    nolanMovies.reduce((obj, item, count) => {
      return obj + parseFloat(item.imdbRating);
    }, 0) / nolanMovies.length;

  // Add your code above this line
  return averageRating;
}
console.log(getRating(watchList));

// alphabetical order ...

function alphabeticalOrder(arr) {
  // ascending order -- a, b

  return arr.sort(function(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
    // if a is equal to b, return 0
    // else, if a is greater than b, return 1
    // else, return - 1
  });
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

// if (a < b) return -1;
// else if (a > b) return 1;
// return 0;

// sort and return an array without modifying it

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line
  var newArr = [];
  return arr.concat(newArr).sort(function(a, b) {
    return a - b;
  });
  // Add your code above this line
}

nonMutatingSort(globalArray);

// separate a string into words
// join them into a string

function sentensify(str) {
  // Add your code below this line
  var string = str.split(/\W/);
  return string.join(" ");
  // Add your code above this line
}
sentensify("May-the-force-be-with-you");

// the global variable
var globalTitle = "Winter Is Coming";

// convert titles into acceptable slug
function urlSlug(title) {
  return (
    title
      // make it lowercase
      .toLowerCase()
      // trim away whitespace
      .trim()
      // split it into words, no white spaces
      .split(/\s+/)
      // join it again with dashes between words
      .join("-")
  );
}

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"

// check if each element is positive
function checkPositive(arr) {
  return arr.every(currentValue => currentValue > 0);
}
checkPositive([1, 2, 3, -4, 5]);

// return true if any elements within the array meet the criteria
function checkPositive(arr) {
  return arr.some(currentValue => currentValue > 0);
}
checkPositive([1, 2, 3, -4, 5]);

// The arity of a function is the number of arguments it requires.
// Currying a function means to convert a function of N arity into N functions of arity 1.

function add(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
}
add(10)(20)(30);

// a long, drawn out chunk of code that adds up all numbers within a range

function sumAll(arr) {
  // get last argument
  let iteration = arr[arr.length - 1];
  // get first argument
  let beginning = arr[0];
  // initialize sum
  let sum = 0;
  // if iteration is bigger than beginning
  if (iteration > beginning) {
    // while beginning is less than iteration, loop through and add each beginning to sum
    for (let i = beginning; i <= iteration; i++) {
      sum += i;
    }
    // return the total
    return sum;
    // same as above but reverse
  } else if (iteration < beginning) {
    for (let i = beginning; i >= iteration; i--) {
      sum += i;
    }
  }
  return sum;
}

sumAll([1, 4]);

// a better solution for adding up numbers within a range
// refactored

function sumAll(arr) {
  // initalize sum
  var sum = 0;
  // let i = to smallest number in arr
  // while i is less than biggest number in the array, loop through them
  // set sum = iteration + sum
  for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]);

// RETURN SYMMETRIC DIFFERENCE
function diffArray(arr1, arr2) {
  // initialize empty array
  var newArr = [];
  // loop through the length of arr1
  for (let i = 0; i < arr1.length; i++) {
    // check inside arr2
    // if there is no index for the given iteration (which means it doesnt exist)...
    // ...push the element into new arr
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
    // same logic, but for arr1
  }
  for (let j = 0; j < arr2.length; j++) {
    // check if any iterations have indices inside arr1
    // if the iterations index returned "1", it would not be pushed into new arr
    if (arr1.indexOf(arr2[j]) === -1) {
      newArr.push(arr2[j]);
    }
  }

  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]);

// destroyer function
// my code

function destroyer(arr) {
  // spread operator to get all arguments from argument object
  const valuesToRemove = [...arguments];
  // loop through arguments
  for (let i = 0; i < valuesToRemove.length; i++) {
    // filter through arr and only return elements not equal to arguments
    arr = arr.filter(item => {
      return item !== valuesToRemove[i];
    });
  }

  console.log(arr);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// destroyer function one liner
// found on FCC
// study

function destroyer(arr) {
  // filter through the arr
  // return items not equal to argument
  // syntax: arr.includes(valueToFind[, fromIndex])
  return arr.filter(
    // return item not equal to arguments and slice from 1 to arguments.length that include the item
    // return item that is NOT...
    // ... arguments.slice(start from index 1 to end of arguments) that includes the item
    item => ![...arguments].slice(1, arguments.length).includes(item)
  );
}

// consider Object.entries and Object.keys
// for loops, for of loops
// tackle tomorrow

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].last === source.last) {
      arr.push(collection[i]);
    }
  }
  console.log(arr);

  // Only change code above this line
  return arr;
}

whatIsInAName(
  [
    {
      first: "Romeo",
      last: "Montague"
    },
    {
      first: "Mercutio",
      last: null
    },
    {
      first: "Tybalt",
      last: "Capulet"
    }
  ],
  { last: "Capulet" }
);

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  let entries = Object.entries(collection);
  // let other = Object.entries(source)

  for (const [name, item] of entries) {
    if (item === source) {
      arr.push(item);
    }
    console.log(arr);
  }

  // Only change code above this line
  return arr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  let entries = Object.entries(collection);
  let other = Object.entries(source);

  // let other = Object.entries(source)

  for (const [name, item] of entries) {
    for (const [oname, oitem] of other) {
      if (item.length == oitem.length) {
        arr.push(item);
      }
      break;
    }
  }
  console.log(arr);

  // Only change code above this line
  return arr;
}

whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
);

// working solution...

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line

  var other = Object.keys(source);
  arr = collection.filter(val =>
    other.every(item => source[item] === val[item])
  );

  console.log(arr);
  // Only change code above this line
  return arr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);

// elliots solution
function whatIsInAName(collection, source) {
  var originalKeys = Object.keys(source);
  // get keys
  return collection.filter(item => {
    // filter through collection
    for (let key of originalKeys) {
      // for of loop to loop through keys
      if (item[key] !== source[key]) {
        // if key of item is not equal to key of source, return false
        return false;
      }
    }
    // return true (this should return only keys that match)
    return true;
  });
}

whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
);

// CASE-SENSITIVE REPLACE WORDS FUNCTION
// my clunky version

function myReplace(str, before, after) {
  var newStr = str.split(" ");
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === before) {
      if (before[0] === before[0].toUpperCase()) {
        let word = after.replace(after[0], after[0].toUpperCase());
        return str.replace(before, word);
        break;
      } else if (newStr[i] === before) {
        return str.replace(before, after);
        break;
      }
    }
  }
}

myReplace("Let us go to the store", "store", "mall");

// CASE-SENSITIVE REPLACE WORDS FUNCTION
// way better version found in FCC comments

function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    after = after.replace(after[0], after[0].toUpperCase());
  }
  return str.replace(before, after);
}

// return array with indices of nums that add up to target

function twoSums(nums, target) {
  let number = 0;
  let array = [];
  for (let i = 0; i < nums.length; i++) {
    number += nums[i];
    array.push(nums.indexOf(nums[i]));
    if (number === target) {
      return array;
    }
  }
}

twoSums([2, 7, 11, 15], 9);

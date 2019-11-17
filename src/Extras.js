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
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

function longestWords(str) {
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

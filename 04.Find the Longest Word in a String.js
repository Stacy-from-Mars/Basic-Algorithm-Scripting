function findLongestWordLength(str) {
    const word = str.split(" ").sort((a, b) => b.length - a.length);
    return word[0].length
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {}; // _ * _ = O(1)
  const unique = []; // _ * _ = O(1)
  for (
    let i = 0; // _ * _ = O(?)
    i < words.length; // _ * _ = O(n)
    i++ // _ * _ = O(n)
  ) {
    const word = words[i]; // _ * _ = O(n)
    if (!seen[word]) {
      // _ * _ = O(n)
      seen[word] = true; // _ * _ = O(?)
      unique[unique.length] = word; // _ * _ = O(?)
    }
  }
  return unique; // _ * _ = O(1)
} // Big O Notation for uniqueLinear: O(?)

function uniqueQuadratic(words) {
  const unique = []; // _ * _ = O(1)
  for (
    let i = 0;
    // _ * _ = O(?)
    i < words.length;
    // _ * _ = O(n)
    i++ // _ * _ = O(n)
  ) {
    const word = words[i]; // _ * _ = O(n)
    let isUnique = true; // _ * _ = O(n)
    for (
      let c = 0; // _ * _ = O(n)
      c < i; // _ * _ = O(n^2)
      c++ // _ * _ = O(?)
    ) {
      const comparing = words[c]; // _ * _ = O(?)
      if (comparing === word) {
        // _ * _ = O(?)
        isUnique = false; // _ * _ = O(n^2)
      }
    }
    if (isUnique) {
      // _ * _ = O(n)
      unique[unique.length] = word; // _ * _ = O(n)
    }
  }
  return unique; // _ * _ = O(1)
} // Big O Notation for uniqueQuadratic: O(?)

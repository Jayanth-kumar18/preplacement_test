function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    // Convert the input string to lowercase for case-insensitive matching
    const lowerCaseStr = str.toLowerCase();
  
    for (let i = 0; i < lowerCaseStr.length; i++) {
      if (vowels.includes(lowerCaseStr[i])) {
        count++;
      }
    }
  
    return count;
  }
  const str = 'Hello, World!';
const result = countVowels(str);
console.log(result); // Output: 3

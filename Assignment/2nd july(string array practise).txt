// 1. Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log("1. Reverse String:", reverseString("hello")); // "olleh"

// 2. Check Palindrome
function isPalindrome(str) {
  const cleanStr = str.toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}
console.log("2. Is Palindrome:", isPalindrome("Madam")); // true

// 3. Count Vowels
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log("3. Count Vowels:", countVowels("JavaScript")); // 3

// 4. Capitalize First Letter of Each Word
function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
console.log("4. Capitalize Words:", capitalizeWords("hello world")); // "Hello World"

// 5. Character Frequency
function charFrequency(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}
console.log("5. Character Frequency:", charFrequency("aabbbc")); // { a: 2, b: 3, c: 1 }

// 6. Remove Duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log("6. Remove Duplicates:", removeDuplicates([1, 2, 2, 3, 4, 4]));

// 7. Flatten an Array
function flattenArray(arr) {
  return [].concat(...arr);
}
console.log("7. Flatten Array:", flattenArray([[1, 2], [3, 4], [5]]));

// 8. Find Max and Min
function findMaxMin(arr) {
  return {
    max: Math.max(...arr),
    min: Math.min(...arr),
  };
}
console.log("8. Find Max and Min:", findMaxMin([4, 1, 9, -2]));

// 9. Sum of Even Numbers
function sumEven(arr) {
  return arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
}
console.log("9. Sum of Even Numbers:", sumEven([1, 2, 3, 4, 5, 6]));

// 10. Group by Type
function groupByType(arr) {
  const grouped = {};
  for (let item of arr) {
    const type = typeof item;
    if (!grouped[type]) {
      grouped[type] = [];
    }
    grouped[type].push(item);
  }
  return grouped;
}
console.log("10. Group by Type:", groupByType([1, 'a', true, 2, 'b']));

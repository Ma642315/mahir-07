function flatten(arr) {
  return arr.reduce((flat, item) =>
    Array.isArray(item) ? flat.concat(flatten(item)) : flat.concat(item), []);
}

console.log(flatten([1, [2, [3, [4]], 5]]));

// 2. Remove duplicates without Set
function removeDuplicates(arr) {
  const result = [];
  for (let num of arr) {
    if (!result.includes(num)) result.push(num);
  }
  return result;
}
console.log("2. Remove Duplicates:", removeDuplicates([1, 2, 2, 3, 1]));

// 3. Shared reference and mutation
const a = [1, 2, 3];
const b = a;
b.push(4);
console.log("3. After b.push(4):", a);

// 4. Second largest number
function secondLargest(arr) {
  let max = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num < max) {
      second = num;
    }
  }
  return second;
}
console.log("4. Second Largest:", secondLargest([10, 5, 8, 1, 9]));

// 5. Count occurrences
function countOccurrences(arr) {
  const counts = {};
  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;
  }
  return counts;
}
console.log("5. Count Occurrences:", countOccurrences([1, 2, 2, 3, 1, 1]));

// 6. Custom .map() polyfill
Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};
console.log("6. Custom .map():", [1, 2, 3].myMap(x => x * 2));

// 7. Sort by multiple object properties
const people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "John", age: 22 }
];
people.sort((a, b) => {
  if (a.name !== b.name) return a.name.localeCompare(b.name);
  return a.age - b.age;
});
console.log("7. Sorted People:", people);

// 8. Filter prime numbers
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++)
    if (num % i === 0) return false;
  return true;
}
function getPrimes(arr) {
  return arr.filter(isPrime);
}
console.log("8. Prime Numbers:", getPrimes([1, 2, 3, 4, 5, 6, 7]));

// 9. Array length set to 0
const arr9 = [1, 2, 3];
arr9.length = 0;
console.log("9. arr[0] after clearing:", arr9[0]);

// 10. forEach vs map
const a10 = [1, 2, 3];
const b10 = a10.forEach(x => x * 2);
console.log("10. forEach result:", b10); // undefined
const c10 = a10.map(x => x * 2);
console.log("10. map result:", c10);     // [2, 4, 6]

// 11. slice() copy
const a11 = [1, 2, 3];
const b11 = a11.slice(0, 2);
b11[0] = 100;
console.log("11. a after slice copy:", a11); // Original remains unchanged

// 12. Find all pairs with target sum
function findPairs(arr, target) {
  const result = [];
  const seen = new Set();
  for (let num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      result.push([complement, num]);
    }
    seen.add(num);
  }
  return result;
}
console.log("12. Pairs with sum 6:", findPairs([1, 2, 3, 4, 5], 6));

// 13. Chunk array into groups
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
console.log("13. Chunked Array:", chunkArray([1, 2, 3, 4, 5, 6], 2));

// 14. Reduce explanation
const sum14 = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0);
console.log("14. Reduce sum:", sum14);

// 15. splice() time complexity explanation
console.log("15. splice() time complexity: O(n)");

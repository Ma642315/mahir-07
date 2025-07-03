// 1. Even or Odd
let num = 7;
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 2. Positive, Negative, or Zero
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// 3. Greater of Two Numbers
let a = 10, b = 20;
if (a > b) {
  console.log(a);
} else if (b > a) {
  console.log(b);
} else {
  console.log("Both are equal");
}

// 4. Divisible by 3
if (num % 3 === 0) {
  console.log("Divisible by 3");
} else {
  console.log("Not divisible by 3");
}

// 5. Multiple of 7
if (num % 7 === 0) {
  console.log("Multiple of 7");
} else {
  console.log("Not a multiple of 7");
}

// 6. Vowel or Consonant
let ch = 'e';
if ("aeiou".includes(ch)) {
  console.log("Vowel");
} else {
  console.log("Consonant");
}

// 7. Between 10 and 50
if (num >= 10 && num <= 50) {
  console.log("In range 10–50");
} else {
  console.log("Out of range");
}

// 8. 3-digit Number
if (num >= 100 && num <= 999) {
  console.log("3-digit number");
} else {
  console.log("Not a 3-digit number");
}

// 9. Voting Eligibility
let age = 17;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible");
}

// 10. Temperature Condition
let temp = 25;
if (temp > 30) {
  console.log("Hot");
} else if (temp >= 15) {
  console.log("Moderate");
} else {
  console.log("Cold");
}
// 11. Greatest of Three
let x = 12, y = 45, z = 33;
if (x >= y && x >= z) {
  console.log(x);
} else if (y >= x && y >= z) {
  console.log(y);
} else {
  console.log(z);
}

// 12. Leap Year
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log("Leap year");
} else {
  console.log("Not a leap year");
}

// 13. Char Type
let char = '#';
if (char >= 'A' && char <= 'Z') {
  console.log("Uppercase letter");
} else if (char >= 'a' && char <= 'z') {
  console.log("Lowercase letter");
} else if (char >= '0' && char <= '9') {
  console.log("Digit");
} else {
  console.log("Special character");
}

// 14. Grade Based on Marks
let marks = 88;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else if (marks >= 40) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}

// 15. Day Number to Weekday
let day = 5;
if (day === 1) console.log("Monday");
else if (day === 2) console.log("Tuesday");
else if (day === 3) console.log("Wednesday");
else if (day === 4) console.log("Thursday");
else if (day === 5) console.log("Friday");
else if (day === 6) console.log("Saturday");
else if (day === 7) console.log("Sunday");
else console.log("Invalid day");

// 16. Divisible by both 5 and 11
if (num % 5 === 0 && num % 11 === 0) {
  console.log("Divisible by both 5 and 11");
} else {
  console.log("Not divisible by both");
}

// 17. Prime Number
let isPrime = true;
if (num < 2) isPrime = false;
else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}
console.log(isPrime ? "Prime" : "Not Prime");

// 18. Driving License
let person = { name: "John", age: 20 };
if (person.age >= 18) {
  console.log("Can get driving license");
} else {
  console.log("Cannot get license");
}

// 19. Equal or Greater
if (a === b) {
  console.log("Equal");
} else if (a > b) {
  console.log("a is greater");
} else {
  console.log("b is greater");
}

// 20. Even/Odd and Positive/Negative
if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
// 21. Average of 5 Subjects and Grade
let s1 = 90, s2 = 85, s3 = 70, s4 = 65, s5 = 75;
let avg = (s1 + s2 + s3 + s4 + s5) / 5;
if (avg >= 90) console.log("Grade A");
else if (avg >= 75) console.log("Grade B");
else if (avg >= 60) console.log("Grade C");
else if (avg >= 40) console.log("Grade D");
else console.log("Grade F");

// 22. Divisible by 3 or 5 but not both
if ((num % 3 === 0 || num % 5 === 0) && !(num % 3 === 0 && num % 5 === 0)) {
  console.log("Divisible by 3 or 5 but not both");
} else {
  console.log("Doesn’t satisfy condition");
}

// 23. Palindrome Number
let original = 121;
let reversed = parseInt(original.toString().split('').reverse().join(''));
if (original === reversed) {
  console.log("Palindrome");
} else {
  console.log("Not palindrome");
}

// 24. Sum of Digits Even or Odd
let sum = 0, temp = 12345;
while (temp > 0) {
  sum += temp % 10;
  temp = Math.floor(temp / 10);
}
console.log(sum % 2 === 0 ? "Sum is even" : "Sum is odd");

// 25. Overtime Pay
let hours = 45;
if (hours > 40) {
  console.log("Overtime pay: Rs.", (hours - 40) * 12);
} else {
  console.log("No overtime pay");
}

// 26. Net Salary
let basic = 12000, hra, da;
if (basic < 10000) {
  hra = basic * 0.2;
  da = basic * 0.5;
} else {
  hra = basic * 0.3;
  da = basic * 0.8;
}
let net = basic + hra + da;
console.log("Net Salary: Rs.", net);

// 27. Days in Month
let month = 2;
if (month === 2) console.log("28 or 29 days");
else if ([4,6,9,11].includes(month)) console.log("30 days");
else if ([1,3,5,7,8,10,12].includes(month)) console.log("31 days");
else console.log("Invalid month");

// 28. Password Strength
let password = "P@ssw0rd!";
if (password.length >= 8 && /\d/.test(password) && /\W/.test(password)) {
  console.log("Strong password");
} else {
  console.log("Weak password");
}

// 29. Triangle Type
let side1 = 10, side2 = 10, side3 = 10;
if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
  if (side1 === side2 && side2 === side3) console.log("Equilateral");
  else if (side1 === side2 || side2 === side3 || side1 === side3) console.log("Isosceles");
  else console.log("Scalene");
} else {
  console.log("Invalid triangle");
}

// 30. Mini Login System
let username = "admin", passwordInput = "1234";
let correctUsername = "admin", correctPassword = "1234";
if (username === correctUsername && passwordInput === correctPassword) {
  console.log("Login successful");
} else {
  console.log("Invalid credentials");
}

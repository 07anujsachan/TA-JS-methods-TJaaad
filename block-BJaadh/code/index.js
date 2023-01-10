// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ["This", "is", "a", "collection", "of", "words"];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
console.log(numbers.indexOf(101));
// - Find the last index of `9` in numbers
numbers.lastIndexOf(9);
// - Convert value of strings array into a sentance like "This is a collection of words"
console.log(strings.join(" "));
// - Add two new words in the strings array "called" and "sentance"
let newStrings = strings.concat("called", "sentence");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
console.log(newStrings.join(" "));
// - Remove the first word in the array (strings)
strings.pop();
console.log(strings);
// - Find all the words that contain 'is' use string method 'includes'
strings.includes("is");
// - Find all the words that contain 'is' use string method 'indexOf'
strings.indexOf("is");
// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every((num) => {
  if (num % 3 === 0) {
    console.log(num);
  }
});
// -  Sort Array from smallest to largest
numbers.sort((a, b) => a - b);
console.log(numbers);
// - Remove the last word in strings
strings.pop();
// - Find largest number in numbers

//

console.log(
  numbers.reduce((acc, cv) => {
    return acc > cv ? acc : cv;
  })
);

// - Find longest string in strings

// - Find all the even numbers
function isEven(num) {
  return num % 2 === 0;
}
console.log(numbers.filter(isEven));
// - Find all the odd numbers
function isOdd(num) {
  return num % 2 !== 0;
}
console.log(numbers.filter(isOdd));
// - Place a new word at the start of the array use (unshift)

// - Make a subset of numbers array [18,9,7,11]

// - Make a subset of strings array ['a','collection']

// - Replace 12 & 18 with 1221 and 1881

// - Replace words in strings array with the length of the word

// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" },
];
// - Find all customers whose firstname starts with 'J'
console.log(customers[0].firstname.startsWith("J"));
// - Create new array with only first name
let customersFirstName = ["Joe", " John", "Dave", "Jack"];
// - Create new array with all the full names (ex: "Joe Blogs")

// - Sort the array created above alphabetically

// - Create a new array that contains only user who has at least one vowel in the firstname.

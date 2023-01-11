let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
 function findLongestWord (str)  {
  return [...str].sort((acc , cv) => acc.length - cv.length).pop()
 }
  console.log(findLongestWord(words));
// - Convert the above array "words" into an array of length of word instead of word.
 let wordsLength = words.map(( w)=> w.length)
 console.log(wordsLength);
// - Create a new array that only contains word with atleast one vowel.
function checkVowel(word){
  return (
    word.includes('a' , 'e' , 'i' ,'o' , 'u')
  )
}
   let  filterWords = words.filter((w) => checkVowel(w));
console.log(filterWords);
// - Find the index of the word "rhythm"
words.findIndex((w) => w== "rhythm")
// - Create a new array that contians words not starting with vowel.
let notWithVowel = words.filter((w) => !checkVowel(w[0]))
console.log(notWithVowel);

// - Create a new array that contianse words not ending with vowel

let notEndingWithVowel = words.filter((w) => !checkVowel(w[w.length - 1]))

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(array){
  return array.reduce( ( acc , cv) =>{
    acc = acc + cv ;
    return acc
  })
}
console.log(sumArray(numbers));
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let newNumsArray = []
let output = numbers.filter((num)=> num%3===0)
newNumsArray.push(output)
console.log(newNumsArray);

// - Create a new array that contains only even numbers
let evenNum = []
let result = numbers.filter((num) => num % 2 === 0)
 evenNum.push(result)
 console.log(evenNum);
// - Create  a new array that contains only odd numbers.
let oddNum = []
let oddResult = numbers.filter((num) => num % 2 !== 0)
 oddNum.push(oddResult)
 console.log(oddNum);
// - Create a new array that should have true for even number and false for odd numbers.
let oddEven = numbers.map( (num ) => num % 2 === 0)
console.log(oddEven);
// - Sort the above number in assending order.
 let assendingOrder = numbers.sort(( acc , cv ) => acc - cv)

// - Does sort mutate the original array?
yes 
// - Find the sum of the numbers in the array.
 
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

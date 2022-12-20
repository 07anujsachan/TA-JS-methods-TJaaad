Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
- Parameter: it does not accepts any parameter 
   - Return: return a uppercase value of the string that was called .
   - Example:
   ```js
      let name = 'Arya Stark';
      name.toUpperCase() // "ARYA STARK"
       let profession = 'Software Developer';
      profession.toUpperCase() // "SOFTWARE DEVELOPER"
       " Anuj Sachan ".toUpperCase()// "ANUJ SACHAN "
       
   ```
   `toUpperCase` converts a string into uppercase letters. 

3. `toLowerCase`
   - Parameter: it does not accepts any parameter 
   - Return: return a lowercase value of the string that was called .
   - Example:
   ```js
      let name = 'Arya Stark';
      name.toLowerCase() // "arya stark"
       let profession = 'Software Developer';
      profession.toLowerCase() // "software developer "
       " Anuj Sachan ".toLowerCase()// "anuj sachan"
       
   ```
   `toLowerCase` converts a string into lowercase letters. 
4. `trim`
  - Parameter: it does not accepts any parameter 
   - Return:  return a string without any whitespaces from start to end
   - Example:
   ```js
      let name = "      Arya Stark     ";
      name.trim() // "Arya Stark "
       let profession = "    Software Developer    ";
      profession.trim() // "Software Developer"
       "   Anuj Sachan   ".trim()// "anuj sachan"
       
   ```
   `trim` stripped  all whitespace  from both side 
5. `trimEnd`
- Parameter: it does not accepts any parameter 
   - Return:  return a string without any whitespaces from end
   - Example:
   ```js
      let name = "      Arya Stark     ";
      name.trimEnd() // "     Arya Stark "
       let profession = "    Software Developer    ";
      profession.trimEnd() // "    Software Developer"
       "   Anuj Sachan   ".trimEnd()// "   anuj sachan"
       
   ```
   `trimEnd` stripped  all whitespace  from end
6. `trimStart`
- Parameter: it does not accepts any parameter 
   - Return:  return a string without any whitespaces from start
   - Example:
   ```js
      let name = "      Arya Stark     ";
      name.trimStart() // "     Arya Stark "
       let profession = "    Software Developer    ";
      profession.trimStart() // "    Software Developer"
       "   Anuj Sachan   ".trimStart()// "   anuj sachan"
       
   ```
   `trimStart` stripped  all whitespace  from start
7. `concat`
- Parameter: it accepts string or number of strings
   - Return:  return a concatinated string from all the strings pass in parameter
   - Example:
   ```js
      let name = " Arya Stark ";
      name.concat("","is a", "software developer") // Arya Strak is a software developer
       let school = " AltCampus" ;
      school.concat("","is based at Himanchal Pradesh") // Altcampus is basedat Himanchal Pradesh
       " Anuj Sachan ".concat( "and"," Arya Stark","are a", "software developer")//  Anuj Sachan and  Arya Strak are a software developer
       
   ```
   `concat` function concatenates  all the strings pass in parameter and returns  a new concatinated string
8. `endsWith`
- Parameter: it accepts a characters to be searched
   - Return:  return  true and false if characters are found at the end of string true  otherwise false. 
   - Example:
   ```js
      let ques = ' is this a question?' ;
      ques.endsWith(?) // true
       let location = "Altcampus is basedat Himanchal Pradesh ";
      location.endsWith(sh) // true
       let location = "Altcampus is basedat Himanchal Pradesh ";
      location.endsWith(Sh) // false
     
       
   ```
   `endsWith` method check whether a string ends with the characters pass in parameter.
9. `includes`
- Parameter: it accepts a string to be searched
   - Return:  return  true and false if string are found in the  string true  otherwise false. 
   - Example:
   ```js
      let ques = ' is this a question?' ;
      ques.includes(is) // true
       let location = "Altcampus is based at Himanchal Pradesh ";
      location.includes(at) // true
       let location = "Altcampus is basedat Himanchal Pradesh ";
      location.includes(Sh) // false
     
       
   ```
   `includes` method check whether a string with the string pass in parameter.
10. `indexOf`
- Parameter: it accepts a string whoes index  to be searched
   - Return: index of the first occurrence of String found, or -1 if not found.
   - Example:
   ```js
      let ques = ' is this a question?' ;
      ques.indexOf(a) // 6
       let location = "Altcampus is basedat Himanchal Pradesh ";
      location.indexOf(i) // 9
       let location = "Altcampus is basedat Himanchal Pradesh ";
      location.indexOf(xyz) // -1
     
       
   ```
   `indexOf` method string to search for the entire calling string or character  and returns the index f string or character pass in parameter .
11. `lastIndexOf`
- Parameter: it accepts a string whoes index  to be searched
   - Return: index of the last occurrence of String found
   - Example:
   ```js
      let ques = ' is this a question?' ;
      ques.indexOf(i) // 12
       let location = "Altcampus is basedat Himanchal Pradesh ";
      location.indexOf(a) // 29
       let location = "Altcampus is basedat Himanchal Pradesh ";
      location.indexOf(xyz) // -1
     
       
   ```
   `indexOf` method string to search for the entire calling string or character  and returns the last  index of string or character pass in parameter .
12. `padEnd`

   - Parameter: 
   - Return: 
   - Example:
     ```js
     let name = 'Arya Stark';
     name.padEnd('16', '.'); //' Arya Stark......'
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.padEnd('35', ';'); //  'A quick brown fox jumped over a lazy dog;;;'
     let houseName = 'Starks';
     houseName.padEnd('9', '+'); // 'Starks+++'
     ```
   - `padEnd`  method use to add padding to the end of string  or sentense 
13. `padStart`
'- Parameter: 
   - Return: 
   - Example:
     ```js
     let name = 'Arya Stark';
     name.padStart('16', '.'); //'....Arya Stark'
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.padStart('35', 'a'); //  'aaa A quick brown fox jumped over a lazy dog'
     let houseName = 'Starks';
     houseName.padStart('9', '+'); // '+++Starks
     ```
   - `padStart`  method use to add padding to the start  of string  or sentense 
14. `repeat`
15. `replace`
16. `slice`
17. `split`
18. `substring`

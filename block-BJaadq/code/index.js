// NOTE: You can not use reduce methods to solve this exercise

function countAllPeople() {
  let count = 0
 got.houses.map((house)=>{
 count = count + house.people.length 

 });
 return count
 
}

function peopleByHouses() {
  let people = {}
  got.houses.map((house) =>{
    people[house.name] = house.people.length
  })
  return people
}

function everyone() {
  let peopleArray = []
  got.houses.map((house) =>{
    house.people.map(( people) =>{
      peopleArray.push(people.name)
    })
    
  })
  return peopleArray
}

function nameWithS() {
  let peopleArrayWithS = []
  got.houses.map((house) =>{
    house.people.map(( people) =>{
      if(people.name.includes('s', 'S')){
        peopleArrayWithS.push(people.name)
      }
      
    })
    
  })
  return peopleArrayWithS
}

function nameWithA() {
  let peopleArrayWithA = []
  got.houses.map((house) =>{
    house.people.map(( people) =>{
      if(people.name.includes('a', 'A')){
        peopleArrayWithA.push(people.name)
      }
      
    })
    
  })
  return peopleArrayWithA
}

function surnameWithS() {
  let surnameArrayWithS = []
  got.houses.map((house) =>{
    house.people.map(( people) =>{
      let surname =  people.name.split( " ")[1]
      
      if(surname.startsWith( 'S')){
        surnameArrayWithS.push(people.name)
      }
      
    })
    
  })
  return surnameArrayWithS
}

function surnameWithA() {
  let surnameArrayWithA = []
  got.houses.map((house) =>{
    house.people.map(( people) =>{
      let surname =  people.name.split( " ")[1]
     
      if(surname.startsWith( 'A')){
        surnameArrayWithA.push(people.name)
      }
      
    })
    
  })
  return surnameArrayWithA
}

function peopleNameOfAllHouses() {
  let allPeople = {}
  got.houses.map((house) =>{
     let peopleName =  house.people.map(( people) =>{
      return people.name
    })
    allPeople[house.name] = peopleName
  })
  return allPeople
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}

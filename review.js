/*
1. How do we assign a value to a variable? 
    Using let or const and a assignment operator
2.How do we change the value of a variable?
    You can reassign a value by recalling the variable and using the assignment operator for the new value
3. How do we assign an existing variable to a new variable?
    By using let/const to create a new variable and setting it equal to the exisiting variable.
4. Remind me, what are declare, assign, and define?
    declare = create a variable
    assign = give a variable a value
    define = create a function
5. What is pseudocoding and why should you do it?
    Pseudocoding is writing code with regular english. You should do it to help yourself or others understand what you are doing or plan to do more easily. Its helpful in planning out code.

6.What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

90/10


*/

//B
let firstVariable = 'Hello World'
firstVariable = 3
let secondVariable = firstVariable
secondVariable = 'Telephone man'
console.log(firstVariable)
const yourName = 'Austin'
console.log('Hello, my name is ' + yourName)

//C
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 !== '48');

  //D
animal = 'dog'
if (animal === 'cow'){
    console.log('mooooo')
} else {
    console.log("Hey! You're not a cow.")
}

const personsAge = 15
if (personsAge >= 16){
    console.log("Here are the keys!")
} else {
    console.log("Sorry, you're too young.")
}

//Loops
//A

for(let i = 0; i <= 10; i++){
    console.log(i)
}

for(let i = 10; i <= 400; i++){
    // console.log(i)
}

for(let i = 12; i <= 4000; i += 3){
    // console.log(i)
}

//B
for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i + ' <-- is an even number')
    } else {
        console.log(i)
    }
}

//C 
for(let i = 0; i <= 100; i++){
    if(i % 5 === 0){
        console.log(`I found a ${i}. High five!`)
    }
    if (i % 3 === 0){
        console.log(`I found a ${i}. Three is a crowd!`)
    }
}

//D
let bank_account = 0
// for(let i  = 1; i <= 10; i++){
//     bank_account = i + bank_account
//     console.log(bank_account)
// }

for(let i  = 1; i <= 100; i++){
    bank_account = i + bank_account;
}
bank_account = bank_account * 2
console.log(bank_account)

//Arrays&Control Flow
//A
/*
1. What are the things in an array called?
    Elements
2. Do Arrays guarantee those things will be in order?
    Yes
3. What real-life thing could you model with an array?
    When making a music playlist
*/

//B
const quotes = [
    'To be or not to be. That is the question',
    'If you was beefing at that wedding then you should have been beefing at that wedding',
    'Aint nobody come here to see you Otis'
]
// C
const randomThings = [1, 10, "Hello", true]
randomThings[0]
randomThings[2] = 'World'
console.log(randomThings)

//D
ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
ourClass[2]
ourClass[4] = 'Octocat'
ourClass.push("Cloud City")
console.log(ourClass)

//E
const myArray = [5, 10, 500, 20]
myArray.push('Aegon')
myArray.push('Turtle')
myArray.shift()
myArray.unshift('Bob Marley')
myArray.pop()
myArray.reverse()
console.log(myArray)
//Yes, I did mutate the array. To mutate means to change the original array. It returned the reversed array.

//F
const inte = 11
if(inte < 100){
    console.log('little number')
} else {
    console.log('big number')
}

//G
if(inte < 5){
    console.log('little number')
} else if ( inte > 10){
    console.log('big number')
} else{
    console.log('monkey')
}

//H
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
kristynsCloset.splice(6,0,'raybans');
kristynsCloset[5] = 'stained knit hat';
console.log(kristynsCloset);

thomsCloset[0][0];
thomsCloset[1][2];
thomsCloset[2][1];

console.log(`Thom is looking a hot mess in his ${thomsCloset[0][0]}, ${thomsCloset[1][2]} and ${thomsCloset[2][1]}!`);

thomsCloset[1][2] = 'Footie Pajamas';
console.log(thomsCloset);

// Functions 
// A (they said skip so I'll skip)
//B
const printCool = (name) => {
    console.log(`${name} is cool`);
}
printCool('Austin')

//C
const calculateCube = (num) => {
    const vol =num ** 3;
    console.log(vol)
}
calculateCube(2)

//D
const isVowel = (letter) => {
    if( letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e' || letter.toLowerCase() === 'i' || letter.toLowerCase() === 'o' || letter.toLowerCase() === 'u'){
        return true
    } else {
        return false
    }
}
console.log(isVowel('E'))

//E
const getTwoLengths = (word1, word2) =>{
   return [word1.length, word2.length]

}
console.log(getTwoLengths("Hank", "Hippopopalous"));

//F
let counter = 0
const arrCounter = []
const getMultipleLengths = (arr) =>{
   return arr.map(function(word){
        return word.length
    })
}


console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


const maxOfThree = (a,b,c)=>{
    if(a > b && c){
        return a
    } else if (b > a && c){
        return b
    } else if (c > a && b){
        return c
    } else {
        return console.log('no')
    }

}
console.log(maxOfThree(333, 2223, 2224));

const printLongestWord = (arr) =>{
     arr.sort ((a,b) => {
      return b.length - a.length;
    });
   return arr[0]
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));


const user = {
    name: 'Austin',
    email: 'asampon@yahoo.com',
    age: 21,
    purchased: []

}
user.email = 'newmail@gmail.com'
user.age++
user.location = 'Atl'
user.purchased.push('carbohydrates','peace of mind','Merino jodhpurs')
console.log(user.purchased[2])
user.friend ={
    name:'Kax',
    age:21,
    location: 'atl',
    purchased: []
}
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55
user.friend.purchased.push('The one ring','A latte')
console.log(user.friend.purchased[1])

for(let i = 0; i<user.purchased.length; i++){
    console.log(user.purchased[i])
}
for(let i = 0; i<user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i])
}

const updateUser = () => {
    user.age++;
    user.name = user.name.toUpperCase()
}

updateUser()
console.log(user)

const oldAndLoud = (person) => {
    person.age++;
    person.name = person.name.toUpperCase()
}

oldAndLoud(user)
console.log(user)

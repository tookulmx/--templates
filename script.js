// // Methods and objects ---------------------------------------------------------------------------->

// var database = [
//     {
//         username: "Name",
//         password: "contra"
//     }
// ];

// var newsFeed = [
// {
//     username: "One",
//     timeline: "Newsfeed"
// },

// {
//     username: "Two",
//     timeline: "Newsfeed"
// },


// {
//     username: "Three",
//     timeline: "Newsfeed"
// }
// ];

// var userNamePrompt = prompt("What is your name?");
// var passwordPrompt = prompt("What is your password?");

// function signIn(user, pass) {
//     if (user === database[0].username && pass === database[0].password){
//         console.log(newsFeed);
//     } else {
//         alert("Wrong user");
//     }

// }

// signIn(userNamePrompt, passwordPrompt);

// For, while, do, forEach ---------------------------------------------------------------------------------->

// var todos = [
//     "clean room",
//     "brush teeth",
//     "excercise",
//     "study javascript",
//     "eat healty"

// ];

// for(var i=0; i < todos.length; i++) {
//     todos[i] = todos[i] + "!";
// }

// var counterOne = 0;
// while (counterOne <= 10) {
//     console.log(counterOne);
//     counterOne++
// }

// var counterTwo = 10;
// do {
//     console.log(counterTwo);
//     counterTwo --
// } while (counterTwo > 11);



// Document Object Model Events Example -------------------------------------------------------------------------------->

// var buttonAdd = document.getElementById("add");
// var buttonCheck = document.getElementById("check");

// buttonAdd.addEventListener("click", function(){
//     console.log("Click!!!!!!!!!")
// })

// buttonCheck.addEventListener("mouseenter", function() {
//     console.log("Click!!!!!!!!!")
// })



// List and scripts -------------------------------------------------->

// var buttonAdd = document.getElementById("add");
// var buttonCheck = document.getElementById("check");
// var input = document.getElementById("user-input");
// var ul = document.querySelector("ul");
// var checked = document.getElementsByClassName("done");



// function inputLenght() {
//     return input.value.length;
// }

// function createListElement() {
//     var list = document.createElement("li");
//     list.appendChild(document.createTextNode(input.value));
//     ul.appendChild(list);
//     input.value = "" ;
// }

// function addEventListAfterClick() {
//     if (inputLenght() > 0) {
//         createListElement();
//         }
// }

// function addListAfterKeypress(event) {
//     if (inputLenght() > 0 && event.keyCode == 13) {
//         createListElement();
//         }
// }

// buttonAdd.addEventListener("click", addEventListAfterClick);


// input.addEventListener("keypress", addListAfterKeypress);

// function doneTask(task) {
//     if (task.target.tagName === "LI") {
//         task.target.classList.toggle("done");
//     }
// }

// function handleUlClick(element) {
// 	doneTask(element);
// 	deleteListElement(element);
// }

// // function deleteListElement(checked) {
// // 	if (checked.target.className === "done"){
// // 		checked.target.remove();
// // 	}
// // }

// function cleanElements() {
//            checked[0].parentNode.removeChild(checked[0]);
// }

// buttonCheck.addEventListener("click", cleanElements);

// ul.addEventListener("click", handleUlClick);

// // End list and scripts ----------------------------------------------------->



// Advanced control flow ------------------------------------------------------->
// Ternary Operator

// function isUserValid(bool) {
//     return bool;
// }

// var answer = isUserValid(true) ? "You may enter" : "Access denied" ;

// var automatedAnswer =
//     "Your account # is " + (isUserValid(false) ? "1234" : "not available");

// function condition() {


//     if (isUserValid(true)) {
//         return "You may enter";
//     } else {
//         return "Access denied";
//     }

// }

// var newAnswer = condition();


// Switch statement ------------------------------------------------------------>

// function moveCommand(direction) {
//     var whatHappens;
//     switch(direction) {
//         case "forward":
//             whatHappens = "You enconter a monster";
//             break;
//         case "back":
//                 whatHappens = "Hi";
//                 break;
//         case "right":
//                 whatHappens = "Hello";
//                 break;
//         case "left":
//                 whatHappens = "Hellooooo";
//                 break;
//         default:
//             whatHappens = "Enter direction"

//     }
//     return whatHappens;
// }


// Excercise --------------------------------------------------------------->

//#1 change this function into a ternary and assign it to variable called experiencePoints

// function experiencePoints(bool) {
//     return bool;
// }

// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

// var experiencePoints = winBattle(true) ? 10 : 1;


//Using this function, answer the questions below:
// function moveCommand(direction) {
//     var whatHappens;
//     switch (direction) {
//         case "forward":
//             whatHappens = "you encounter a monster";
//             break;
//         case "back":
//             whatHappens = "you arrived home";
//             break;
//         case "right":
//             whatHappens = "you found a river";
//             break;
//         case "left":
//             whatHappens = "you run into a troll";
//             break;
//         default:
//             whatHappens = "please enter a valid direction";
//     }
//     return whatHappens;
// }

// Strings ------------------------------------------------------------------------------------>

// let name = "Sally";
// let age = "34";
// let pet = "horse";

// const greeting = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;

// function greet(name='', age=30, pet='cat') {
//     return ` Hello ${name}, you seem to be ${age-10}. What a lovely ${pet} you have.`
// }

// --------------------------------------------------------------------------------------------->

// Arrow Functions ----------------------------------------------------------------------------->

// function add(a, b){
//     return a + b;
// }

// const add = (a, b) => a + b;

// -------------------------------------------------------------------------------------------->

// Excercise --------------------------------------------------------------------------------->

// change everything below to the newer Javascript!

// let + const
// let a = 'test';
// let b = true;
// let c = 789;
// a = 'test2';


// // Destructuring
// var person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age       : 50,
//     eyeColor  : "blue"
// };

// const person = {
//     firstName: 'John',
//     lastName:'Doe',
//     age: 50,
//     eyeColor: 'Blue'
// }

// const {firstName, lastName, age, eyeColor} = person;

// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;


// // Object properties
// var a = 'test';
// var b = true;
// var c = 789;

// var okObj = {
//   a: a,
//   b: b,
//   c: c
// };


// // Template strings
// var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";


// // default arguments
// // default age to 10;
// function isValidAge(age) {
//     return age
// }

// // Symbol
// // Create a symbol: "This is my first Symbol"

// // Arrow functions
// function whereAmI(username, location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }

// whereAmI = (username, location) => {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }



// Closures
// A function ran, the function executed, it's never going to execute again but it's going to remember the references to those variables.

// Currying
// The process to converting a function that takes multiple arguments into a function that it takes one at a time

// const multiply = (a, b) => a*b;
// const curriedMultiply = (a) => (b) => a *b;
// // Test command
// curriedMultiply(3)(7);

// Compose
// Two functions together to form a third function were the output of one function is the output of the other

// const compose = (f,g) => (a) => f(g(a));
// const sum = (num) => num + 1;
// review = compose(sum, sum)(5);

// Important avoiding side effects and functional purity

//Solve these problems:

//#1 Create a one line function that adds adds two parameters

// const a = (b,c) => console.log(b,c);

//Closure: What does the last line return?
// const addTo = x => y => x + y
// var addToTen = addTo(10)
// addToTen(3)

//Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1)

// //Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12)


//Composing: What does the last line return?
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10)

//What are the two elements of a pure function?
// Avoiding side effects and functional purity

// Advanced Arrays ------------------------------------------------------------------------------->

// // forEach
// const array = [1,2,10,16];
// const double = [];
// const newArray = array.forEach((num) => {
//     double.push(num * 2);
// })

// 1. Map array
// const array = [1,2,10,16];
// const mapArray = array.map((num) => {
//     return num*2;
// })

// console.log('map', mapArray);

// 2. Filter Array
// const array = [1,2,10,16];
// const filterArray = array.filter(num => num > 5);
// console.log('filter', filterArray);

// 3. Reduce
// const array = [1,2,10,16];
// const reduceArray = array.reduce((acumulator, num) => {
//     return acumulator + num;
// }, 0);

// // Excercise
// // Complete the below questions using this array:
// const array = [
//     {
//       username: "john",
//       team: "red",
//       score: 5,
//       items: ["ball", "book", "pen"]
//     },
//     {
//       username: "becky",
//       team: "blue",
//       score: 10,
//       items: ["tape", "backpack", "pen"]
//     },
//     {
//       username: "susy",
//       team: "red",
//       score: 55,
//       items: ["ball", "eraser", "pen"]
//     },
//     {
//       username: "tyson",
//       team: "green",
//       score: 1,
//       items: ["book", "pen"]
//     },

//   ];

//   //Create an array using forEach that has all the usernames with a "!" to each of the usernames
// let newArray = []
// array.forEach(user => {
//     let {username} = user;
//     username = username + '!';
//     newArray.push(username);
// })

// //Create an array using map that has all the usernames with a "? to each of the usernames
// const mapArray = array.map(user => {
//     let {username} = user;
//     return username + "?";
// })
// console.log(mapArray);

// //Filter the array to only include users who are on team: red
// const filterArray = array.filter(user => {
//     return user.team === "red";
// })
// console.log(filterArray);

// //Find out the total score of all users using reduce
// const total = array.reduce((acc, user) => {
//     return acc + user.score
// }, 0);

// console.log(total);

// // (1), what is the value of i? INDEX of the array.
// // (2), Make this map function pure:
// const arrayNum = [1,2,4,5,7,8,9];
// const newArray = arrayNum.map((num, i) => {
//     return num * 2;
// })

// const answer = array.map(user => {
//     user.items = user.items.map(item => {
//         return item + "!";
//     });
//     return user;
// })
// console.log(answer);

// Advanced Objects ------------------------------------------------------------------->
// 1. Reference type
// 2 .Context
// const object4 = {
//     a: function() {
//         console.log(this);
//     }
// }
// // 3. Instantiention
// class Player {
//     constructor(name, type) {
//         console.log('player', this);
//         this.name = name;
//         this.type = type;
//     }
//     introduce() {
//         console.log(`Hi i am ${this.name}, I am a ${this.type}`);
//     }
// }

// class Wizard extends Player {
//     constructor(name, type) {
//         super(name, type)
//         console.log('wizard', this);
//     }
//     play() {
//         console.log(`Weeeee I'm a ${this.type}`);
//     }
// }

// const wizard1 = new Wizard('Shelly', 'Healer');
// const wizard2 = new Wizard('Shawn', 'Sorcerer');

// Advanced reference object ---------------------------------------------------------------------------->

// let obj = {a: 'a', b: 'b', c: {deep: 'hahahaha'}};
// let clone = Object.assign({}, obj);
// let clone2 = {...obj};
// let superClone = JSON.parse(JSON.stringify(obj));

// obj.c.deep = 5;
// console.log(obj);
// console.log(clone);
// console.log(clone2);
// console.log(superClone);

// Type Coercion --------------------------------------------------------------------------------------------->
// 1 === '1'

// Excercise ------------------------------------------------------------------------------------------------->
//Evaluate these:
//#1
// [2] === [2]
// {} === {}

//#2 what is the value of property a for each object.
// const object1 = { a: 5 };
// const object2 = object1;
// const object3 = object2;
// const object4 = { a: 5};
// object1.a = 4;

//#3 create two classes: an Animal class and a Mamal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.

// class Animal {
//     constructor(name, type, color) {
//         this.name = name;
//         this.type = type;
//         this.color= color;
//     }
// }

// class Mamal extends Animal {
//     constructor(name, type, color) {
//         super(name, type, color)
//         console.log('Mamal', this);
//     }
//     play() {
//         console.log(`Weeeee I'm ${this.name} type ${this.type} and color ${this.color}`);
//     }
// }

// const cow = new Mamal('Vaca', 'Vacuna', 'White');

// Excercise ----------------------------------------------------------------------------------------------------->
// ES7 (Includes and **) ----------------------------------------------------------------------------------------->

// Solve the below problems:

// #1) Check if this array includes the name "John".
// const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
// const dragons1 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// dragonsIncluded = () => {
// if (dragons.includes('John') === true) {
//     return dragons1;
// } else {
//     return "It doesn't include John";
// }
// }

// ES8 ----------------------------------------------------------------------------------------------------------->
// .padStart();
// .padEnd();

// const fun =(a,b,c,d,) => {
//     console.log(a);
// }

// fun(1,2,3,4,)

// Object.keys
// Object.values
// Object.entries


// let obj = {
//     username0: 'Santa',
//     username1: 'Rudolph',
//     username2: 'Grinch'
// }

// function hello() {Object.keys(obj).forEach((key, index) => {
//     console.log(key, obj[key]);
// })
// }


// function hello1() { Object.values(obj).forEach(value => {
//     console.log(value);
// })
// }

// function hello2() {
//     Object.entries(obj).forEach(value=> {
//     console.log(value);
// })
// }

// change = () =>  Object.entries(obj).map(value => {
//     return value[1] + value [0].replace('username', '');
// })

// Excercise ------------------------------------------------------------------------------------->

// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
// const startLine = '     ||<- Start line';
// let turtle = '🐢';
// let rabbit = '🐇';

// // it should look like this:
// // '     ||<- Start line'
// // '       🐢'
// // '       🐇'

// let turtleReady = turtle.padStart(8);
// let rabbitReady = rabbit.padStart(8);
// let startReady = startLine;

// let race = () => {
//     console.log(turtleReady);
//     console.log(rabbitReady);
//     console.log(startReady);
// }

// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
// turtle = turtle.trim().padEnd(70, '*');

// #3) Get the below object to go from:
// let obj = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'reindeer'
//   }
//   // to this:
//   'my name is Rudolf the reindeer'

//   Object.entries(obj).map(value => value.join(" ")).join(' ')


// ES10 ------------------------------------------------------------------------------------------------------->
// const array = [1,[2,3],[4,5]]
// array.flat()

// const entries = ['bob','sally' ,,,,,,,,,,,,, 'cindy']
// entries.flat()

// const jurassicPark = [1,2,3,4,5,6,7,8,9,10,[11,12,[13]],[[[14]]],15,16,17,18,19]
// const jurassicParkUnleashed = jurassicPark.flatMap(creature => 'T-' + creature);

// const userEmail = '                           mail@gmail.com';
// const userEmail1 = '                  new@gmail.com';
// const userEmail2 = '       nww@gmail.com             ';

// const userProfiles = [['commanderTom', 23],['derekZlander', 40], ['hansel', 18] ]
// const users = Object.fromEntries(userProfiles);
// Object.entries(users);

// Try and catch bloc --------------------------------------------------------------------------------------->

// True and catch bloc is used for running a function and if there's any error, you get all the coomands and information contained in the catch module

// try {
//     console.log('You can write a const, var, let or a function');
// } catch (error) {
//     'Hello, the error that we found is ' + error
// }

// Excercise ----------------------------------------------------------------------------------------------->

// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
// const array = [[1],[2],[3],[[[4]]],[[[5]]]]

// newA = () =>  console.log(array.flat(3));

// // #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

// newG =() => console.log(greeting.flat(2))
// phrase = () => console.log(greeting.flatMap(x => x.join(' ')).join(' '))

// //#4 Turn the trapped 3 number into: [3]
// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

// console.log(trapped.flat(Infinity));

// const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '

// console.log(userEmail3.trimEnd().trimStart())

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
// const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '

// console.log(userEmail3.trimEnd().trimStart())

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// const users = { user1: 18273, user2: 92833, user3: 90315 }
// const usersArray = Object.entries(users)

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2])

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }

// const updatedUsers = Object.fromEntries(updatedUsersArray)
// console.log(updatedUsers)



// Advanced Loops --------------------------------------------------------------------------------------------->

// const basket = ['apples', 'oranges', 'grapes'];
// const detailedBasket = {
//     apples: 5,
//     oranges: 10,
//     grapes: 1000,
// }

//1
// for (let i = 0; i < basket.length; i++) {
//     console.log(basket[i]);
// }

//2
// basket.forEach(item => {
//     console.log(item);
// })

// for of
// Iterating - arrays and strings (For of allows us to iterate the elements of an array or a string)
// for (item of basket) {
//     console.log(item);
// }

//for in loop - properties
// Enumarating - objects
// for (item in detailedBasket) {
//     console.log(item);
// }

// Exercise ----------------------------------------->

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
// const array = [-1,0,3,100, 99, 2, 99] // should return 100
// const array2 = ['a', 3, 4, 2] // should return 4
// const array3 = [] // should return 0

// function biggestNumberInArray(arr) {
//   let highest = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (highest < arr[i]) {
//       highest = arr[i];
//     }
//   }
//   return highest
// }

// function biggestNumberInArray2(arr) {
//   let highest = 0;
//   arr.forEach(item => {
//     if (highest < item) {
//       highest = item;
//     }
//   })
//   return highest;
// }

// function biggestNumberInArray3(arr) {
//   let highest = 0;
//   for (item of arr) {
//     if (highest < item) {
//       highest = item;
//     }
//   }
//   return highest;
// }


// biggestNumberInArray3(array3)


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
// amazonBasket = {
//   glasses: 1,
//   books: 2,
//   floss: 100
// }

// function checkBasket(basket, lookingFor) {
//   for (item in basket) {
//     if (item === lookingFor) {
//       return `${lookingFor} is in your basket`
//     }
//   }
//   return 'that does not exist in your basket'
// }


// ES2020 -------------------------------------------------------------------------------------------------------->

// typeof
// MAX_SAFE_INTEGER
// 1n + 2n (BigInt helps you to solve MAX_SAFE_INTEGER problem)

// let pokemon = {
//     pika: {
//         species: 'Mouse Poke',
//         height: 0.8,
//         weight: 4,
//     }
// }

// let weight = pokemon?.pika?.weight;

// Nullish coalescing operator ?? or ||

// Excercise ------------------------------------------------------------------------------------------------>
// // Exercise 1: what do you think the MIN_SAFE_INTEGER is?
// console.log(Number.MAX_SAFE_INTEGER) //9007199254740991
// console.log(Number.MIN_SAFE_INTEGER) //-9007199254740991

// // Exercise 2: why does this throw an error? How can you fix it?
// 3 + 4 + 1n // BigInts need to be calculated with other BigInts so...
// 3n + 4n + 1n // 8n
// 3 + 4 + 1 // 8
// // Both produce the value of 8, but one is a Number type, the other is a BigInt type

// // Exercise 3: Clean up this code using optional chaining
// let will_pokemon = {
//     pikachu: {
//         species: 'Mouse Pokemon',
//         height: 0.4,
//         weight: 6,
//         power: 'lightning',
//         friend: {
//             charizard: {
//                 species: 'Dragon Pokemon',
//                 height: 1.7,
//                 weight: 90.5,
//                 power: 'fire'
//             }
//         }
//     }
// }

// let andrei_pokemon = {
//     raichu: {
//         species: 'Mouse Pokemon',
//         height: 0.8,
//         weight: 30,
//         power: ''
//     }
// }

// if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {
//         console.log('fight!')
//     } else {
//         console.log('walk away...')
//     }


// // Exercise 4: What do these each output?
// console.log(false ?? 'hellooo') //false
// console.log(null ?? 'hellooo') //'hellooo'
// console.log(null || 'hellooo') //'hellooo'
// console.log((false || null) ?? 'hellooo') // 'hellooo'
// console.log(null ?? (false || 'hellooo')) // 'hellooo'


// ES2021 ----------------------------------------------------------------------------->
// const str = "ztm is the best of the best"
// const b = str.replaceAll('best', 'worst');
// const c = str.replace('best', 'worst');

//Debugging ------------------------------------------------------------------------------------------->
// debugger; 

// Async function I ------------------------------------------------------------------------------------------>
// console.log('1');
// setTimeout(() => { 
//     console.log('2');
// }, 2000)
// console.log('3'); 

// Modules ------------------------------------------------------------------------------------------------------>

// CommonJS + Browserify
// js1
// module.exports = function add(a,b) {
//     return a*b;
// }

// // js2
// var add = require("./add"); //We are assuming the js1 file is called add.js


// ES6 + Webpack2
// // js1
// export const add = (a, b) => a + b;
// // or
// export default function add() {
//     return a+b;
// }

// // js2
// import { add } from './add'; //We are assuming the js1 file is called add.js
// // or
// import add from './add'



//Webpack
// module.exports = {
//     entry: './app/main.js'
//     output: {
//         path:'./dist',
//         filename: 'bundle.js'
//     }
// }


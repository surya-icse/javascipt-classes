/////////////////////////////////
// Lecture: let and const


// // ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
// name5 = 'Jane Miller';
// console.log(name5);

// // ES6
// const name6 = 'Jane Smith';
// let age6 = 23;
// name6 = 'Jane Miller';
// console.log(name6);


// // ES5
// function driversLicence5(passedTest) {

//     if (passedTest) {
//         console.log(firstName);
//         var firstName = 'John';
//         var yearOfBirth = 1990;
//     }


//     console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
// }

// driversLicence5(true);

// // ES6
// function driversLicence6(passedTest) {

//     //console.log(firstName);
//     let firstName;
//     const yearOfBirth = 1990;

//     if (passedTest) {
//         firstName = 'John';
//     }

//     console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
// }

// driversLicence6(true);

// var i = 23;

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i);

/////////////////////////////////
// Lecture : Blocks and IIFE
// //ES5
// {
//     const a =1;
//     let b=2;
//     var c = 3
// }

// // console.log(a,b);
// console.log(c);

// //ES6
// (function(){
//     var c= 5;
// })();

// // console.log(c);

////////////////////////////////
// Lecture :Strings

// let firstName = 'John';
// let lastName = 'smith';
// const yearOfBirth = 1990;
// function calcAge(year){
//     return 2016-year;
// }
// //ES5
// console.log('This is '+firstName+' '+lastName+' Who is '+calcAge(yearOfBirth)+' Years Old');

// //ES6-template Litera;
// console.log(`${firstName} ${lastName} is my name and i am ${calcAge(yearOfBirth)} years old`);

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('j'));
// console.log(n.endsWith('ith'));
// console.log(n.includes('hn sm'));
// console.log(`${firstName} `.repeat(5));

////////////////////////////////////
// Lecture : Arrow Functions

// const years = [1990,1965,1982,1937];
// //ES5
// var age5 = years.map(function(el){
//     return 2016-el;
// }); //loop through array 
// console.log(age5);

// //ES6
// let age6 = years.map(el=>2020-el);
// console.log(age6);

// age6=years.map((el,index)=>`age number ${index+1} is ${2020-el}`);
// console.log(age6);

// age6=years.map((el,index)=>{
//     const now = new Date().getFullYear();
//     const age = now-el;
//     return `age number ${index+1} is ${age}`;
// });
// console.log(age6);


////////////////////////////////////////
// Lexical this of array function - arrow function do not have their own this 

//ES5
// var box5={
//     color:'green',
//     position:1,
//     clickMe:function(){
//         var self=this;
//         document.querySelector('.green').addEventListener('click',function(){
//             var str = 'This is box number '+self.position+' and it\'s color is '+self.color;
//             alert(str);
//         });
//     }
// }

// box5.clickMe();

//ES6

// const box6={
//     color:'green',
//     position:1,
//     clickMe:function(){
//         document.querySelector('.green').addEventListener('click',()=>{
//             var str = 'This is box number '+this.position+' and it\'s color is '+this.color;
//             alert(str);
//         });
//     }
// }

// box6.clickMe();

// function Person(name){
//     this.name =name;
// }; 

// Person.prototype.myFriends5=function(friends){
//     var arr = friends.map(function(el){
//         return this.name+' is friends with '+el;
//     }.bind(this));
//     console.log(arr);
// };

// var friends=['John','BoB','Jane'];
// new Person('John').myFriends5(friends);

///////////////////////////////////////
// lecture : Destructuring

//ES5
// var john = ['john',26];
// var name = john[0];
// var age = john[1];

//ES6
// const [name,year]=['john',26];
// console.log(name);
// console.log(year);

// const obj ={
//     firstName:'john',
//     lastName:'smith'
// };

// const {firstName,lastName} = obj;

// console.log(firstName);
// console.log(lastName);

// function calcAgeRetirement(year){
//     const age = new Date().getFullYear()-year;
//     return [age,65-age];
// }

// const [age,retirement] = calcAgeRetirement(1990);
// console.log(age);
// console.log(retirement);

////////////////////////////////////
// Lecture : Arrays in ES6

// ES5
// const boxes = document.querySelectorAll('.box');
// var boxesArr5 = Array.prototype.slice.call(boxes);

// boxesArr5.forEach(function(cur){
//     cur.style.backgroundColor = 'dodgerblue';
// });

//ES6
// const boxes = document.querySelectorAll('.box');
// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(cur=>cur.style.backgroundColor='dodgerblue');  //Important


//ES5
// for(var i = 0;i<boxesArr5.length;i++){
//     if(boxesArr5[i].className === 'box blue'){
//         continue;    
//     }
//     boxesArr5[i].textContent = ['I changed color to blue']
// }

//ES6
// const boxes = document.querySelectorAll('.box');
// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(cur=>cur.style.backgroundColor='dodgerblue');  //Important
// for(const cur of boxesArr6 )
// {
//     if(cur.className.includes('blue'))
//     {
//         continue;
//     }
//     cur.textContent = ['I changed color to blue']
// }

//ES5
// var ages = [12,17,8,21,14,11];

// var full = ages.map(function(cur){
//     return cur >= 18;
// });

// console.log(full);

// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

//ES6
// var ages = [12,17,8,21,14,11];
// console.log(ages.findIndex(cur=> cur>=18));
// console.log(ages.find(cur=> cur>=18));

///////////////////////////////////////////////////////
// Lecture : Spread Operator

//ES6
// const ages = [18,30,12,21];
// var addFourAges = function(a,b,c,d){
//     console.log(a+b+c+d);
// };
// const sum3 = addFourAges(...ages); //...is spread operator

// var set1 =[1,2,3,4,5];
// var set2 =[6,7,8,9,10];
// var allValues = [...set1,'Middle',...set2];
// console.log(allValues);

// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');

// const all = [h,...boxes];

// Array.from(all).forEach(cur=>cur.style.color='purple');

////////////////////////////////////////////////////
// Lecture : Rest Parameter

//ES5

// function isFullAge(){
//     // console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments);
//     argsArr.forEach(cur=>console.log((2016-cur)>=18));
// }

// isFullAge(1990,1999,1965);
// isFullAge(1990,1999,1965,2016,1987);

//ES6
// function isFullAge6(...years){
//     years.forEach(cur => console.log((2016-cur)>=18));
// }

// isFullAge6(1990,1999,1965,2016,1987);

//ES5

// function isFullAge(limit){
//     // console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments,1);
//     console.log(argsArr);
//     argsArr.forEach(cur=>console.log((2016-cur)>=limit));
// }

// isFullAge(18,1990,1999,1965);
// isFullAge(1990,1999,1965,2016,1987);

//ES6
// function isFullAge6(limit,...years){
//     years.forEach(cur => console.log((2016-cur)>=limit));
// }

// isFullAge6(21,1990,1999,1965,2016,1987);

////////////////////////////////////////////////////
// Lecture : Default Parameter

// function Smith(firstName,yearOfBirth,lastName,nationality)
// {

//     lastName===undefined ? lastName='smith':lastName=lastName;
//     nationality===undefined ? nationality='Indian':nationality=nationality;

//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.yearOfBirth=yearOfBirth;
//     this.nationality=nationality;
// }

//ES6
// function Smith(firstName,yearOfBirth,lastName='Smith',nationality='Indian'){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.yearOfBirth=yearOfBirth;
//         this.nationality=nationality;
// }

// var john = new Smith('john',1990);
// var emily = new Smith('emily',1983,'Diaz');

////////////////////////////////////////////////////
// Lecture : Maps(its a new key-value data struture in ES6)

// const question = new Map();

// question.set('question','What is official name of major JS version ?');
// question.set(1,'ES5');
// question.set(2,'ES5');
// question.set(3,'ES 2015');
// question.set(4,'ES7');
// question.set('correct',3);
// question.set(true,'Correct Answer');
// question.set(false,'Please Try Again');

// console.log(question.get('question')); 
// // console.log(question.size); 

// if(question.has(4)){
//     // question.delete(4);
//     // console.log('Answer 4 is here');
// }

// //delete full entry in a map
// // question.clear();

// //loop through a MAP

// // question.forEach((key,value)=>console.log(`This is ${key} asigned to ${value}`));


// for(let [key,value] of question.entries()){
//     if(typeof(key)==='number'){
//         console.log(`${key} : ${value}`);
//     }
// }

// const ans = parseInt(prompt('Write correct Answer'));
// console.log(question.get(ans === question.get('correct')));

////////////////////////////////////////////////////
// Lecture : Classes

//In ES5 they are called as Function Constructor
// var Person5 = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function () {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }

// var john5 = new Person5('John', 1990, 'teacher');

// //ES6 Classes 

// class Person6 { //all classes must have a constructor
//     constructor(name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }
//     calculateAge() {
//         var age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }

//     static greeting(){
//         console.log('Hey there');
//     }
// }

// const john6 = new Person6('John', 1990, 'teacher');
// Person6.greeting();
// john6.calculateAge();


////////////////////////////////////////////////////
// Lecture : Classes with Subclasses(similiar to inheritence in ES5)

//In ES5 they are called as Function Constructor
// var Person5 = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function () {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
// }

// var Athlete5 = function(name, yearOfBirth, job , olympicGames,medals){
//     Person5.call(this,name,yearOfBirth,job);
//     this.olympicGames=olympicGames;
//     this.medals=medals;
// }

// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedal = function(){
//     this.medals++;
//     console.log(this.medals);
// }

// var johnAthlete5 = new Athlete5('john',1990,'swimmer',3,10);
// johnAthlete5.calculateAge();
// johnAthlete5.wonMedal();

////ES6

// class Person6 { //all classes must have a constructor
//     constructor(name, yearOfBirth, job) {
//         this.name = name;
//         this.yearOfBirth = yearOfBirth;
//         this.job = job;
//     }
//     calculateAge() {
//         var age = new Date().getFullYear() - this.yearOfBirth;
//         console.log(age);
//     }

//     static greeting(){
//         console.log('Hey there');
//     }
// }

// class Athlete6 extends Person6{
//     constructor(name,yearOfBirth,job,olympicGames,medals){
//         super(name,yearOfBirth,job);
//         this.olympicGames-olympicGames;
//         this.medals=medals;
//     }

//     wonMedal(){
//         this.medals++;
//         console.log(this.medals);
//     }
// }

// const johnAthlete6 = new Athlete6('john',1990,'swimmer',3,10);
// johnAthlete6.wonMedal();
// johnAthlete6.calculateAge();

////////////////////////////////////////////////
// Coding challenge 8


/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Element {
    constructor(name, bulidYear) {
        this.name = name;
        this.bulidYear = bulidYear;
    }
}

class Park extends Element {
    constructor(name, bulidYear, area, numTrees) {
        super(name, bulidYear);
        this.area = area; //km2 is unit here
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km`);
    }
}

class Street extends Element {
    constructor(name, bulidYear, length, size = 3) {
        super(name, bulidYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name} , build in ${this.bulidYear} is a ${classification.get(this.size)} street`);
    }
}

//parks
const allParks = [new Park('Green park', 1987, 0.2, 215),
new Park('National Park', 1894, 2.9, 3541),
new Park('Oak Park', 1953, 0.4, 949)];

//street
const allStreets = [new Street('Ocean Avenue',1999,1.1,4),
new Street('Evergreen Street',2008,2.7,2),
new Street('4th Street',2015,0.8),
new Street('Sunset Boulevard',1982,2.5,5)];

function calc(arr){

    const sum = arr.reduce((prev,current,index)=> prev+current,0);

    return [sum,sum / arr.length];
}

function reportParks(p){
    
    console.log('---------------------Parks Report---------------------');
    //density
    p.forEach(el=>el.treeDensity());
    //average age
    const ages = p.map(el=>2016-el.bulidYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average age of ${avgAge} Years`);
    //which parks has more that 1000 trees
    const i = p.map(el=> el.numTrees).findIndex(el=>el>=1000) ;
    console.log(`${p[i].name} has more than 1000 trees`);
}

function reportStreets(s){
    console.log('---------------------Street Report---------------------');

    // Total and average length of the town's streets

    const [totalLength,avgLength] = calc(s.map(el=>el.length));
    console.log(`Our ${s.length} Streets have a total length of ${totalLength}KM , with average length of ${avgLength}KM`);

    // Classify sizes
    s.forEach(el=>el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);
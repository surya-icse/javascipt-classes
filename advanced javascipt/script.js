//Constructor Inheritance and prototype
// function Constructor

// var Person = function(name,yearOfBirth,job){
//     this.name=name;
//     this.yearOfBirth=yearOfBirth;
//     this.job=job;
// }

// Person.prototype.calculateAge=function(){
//     console.log(2020-this.yearOfBirth);
// }

// Person.prototype.lastName ='Tripathi';

// var john =new Person('john',1995,'teacher');
// var jane = new Person('jane',1960,'designer');
// var mark = new Person('mark',1959,'plumber');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);


//creating object with Object.create

/*
var personProto ={
    calculateAge:()=>{
        console.log(2020-this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name='john';
john.yearOfBirth=1990;
john.job='teacher';

//different way (ideal way)

var jane = Object.create(personProto,{
    name:{value:'jane'},
    yearOfBirth:{value:1969},
    job:{value:'plumber'}
});
*/

//Primitives vs Objects 

// primitives copies actual value , a copy is created

// objects copies only address

// Primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);



// Objects
/*

var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);

*/

// First CLass Function : passing function as parameter in a function

// var year=[1990,1965,1937,2005,1998];

// function arrAge(arr,func){
//     var resArr=[];
//     for(var i=0;i<arr.length;i++)
//     {
//         resArr.push(func(arr[i]));
//     }
//     return resArr;
// }

// function calcAge(element){
//     return 2016-element;
// }

// function isAdult(agl){
//     return agl>=18;
// }
// var ages = arrAge(year,calcAge); // execution stack started from here
// var checkAdult = arrAge(ages,isAdult);

// console.log(ages);
// console.log(checkAdult);

// returning function from a funtion

// function interviewQuestions(job){
//     if(job==='teacher'){
//         return function(name){
//             console.log(name+', what do you teach ?');
//         }
//     }
//     if(job==='coder'){
//         return function(name){
//             console.log(name+', what are you coding these days ?');
//         }
//     }
//     else{
//         return function(name){
//             console.log("what do yo do "+name);
//         }
//     }
// }

// var ques=interviewQuestions('teacher');
// var out=ques('Suryansh');

// //other way to do the same

// interviewQuestions('code')('suryansh');


//Immediately invoked funtion expression

//normal method
// function game(){
//     var num = Math.random()*10;
//     console.log(num>5);
// }
// game();

// (function(goodLuck){
//     var num = Math.random()*10;
//     console.log(num>5-goodLuck);
// })(2);                  //this is used for data privacy and called as IIFE method


//Lecture:closures 

// function retirement(retirementAge){
//     var a=' years left until retirement';
//     return function(yearOfBirth){
//         var age = 2020 -yearOfBirth;
//         console.log(retirementAge-age+a);
//     }
// }

// var retirementUS=retirement(65);
// var retirementUK=retirement(60);
// var retirementCA=retirement(66);

// retirementUS(1999);
// retirementUK(1997);
// retirementCA(2001);

//another closure examples

// function interviewQuestions(job){

//     return function(name){
//         if(job==='teacher'){
//              console.log(name+', what do you teach ?');
//         }
//         else if(job==='coder'){
//                 console.log(name+', what are you coding these days ?');
//         }
//         else{
//                 console.log("what do yo do "+name);
//             }
//         }
// }  

// interviewQuestions('teacher')('suryansh');

//Bind , Call and Apply

// var john={
//     name:'john',
//     age:22,
//     job:'teacher',
//     presentation:function(style,timeOfDay){
//         if(style==='formal'){
//             console.log('good '+timeOfDay+' ladies and gentleman I\'m '+this.name+' I\'m '+this.age+' years old and i am a '+this.job);
//         }
//         else if(style==='friendly'){
//             console.log('hey what\'s up . Good '+timeOfDay+' ladies and gentleman I\'m '+this.name+' I\'m '+this.age+' years old and i am a '+this.job);
//         }
//     }
// }

// var emily={
//     name:'emily',
//     age:25,
//     job:'designer',
// }

// john.presentation('formal','morning');

// john.presentation.call(emily,'friendly','afternoon');

// // john.presentation.apply(emily,['friendly','afternoon']);  
// // --> takes arguments as an array

// //bind method , it creates copy of a funtion to be strored in a variable

// var johnFriendly = john.presentation.bind(john,'friendly') ;//first variable can be set as a preset
// johnFriendly('morning');
// johnFriendly('evening');

// var emilyFriendly=john.presentation.bind(emily,'friendly');
// emilyFriendly('evening');

//implementing bind method in passing funtions as arguments


// var year=[1990,1965,1937,2005,1998];

// function arrAge(arr,func){
//     var resArr=[];
//     for(var i=0;i<arr.length;i++)
//     {
//         resArr.push(func(arr[i]));
//     }
//     return resArr;
// }

// function calcAge(element){
//     return 2016-element;
// }

// function isAdult(limit,agl){
//     return agl>=limit;
// }

// var ages = arrAge(year,calcAge);

// var adult = arrAge(ages,isAdult.bind(this,20));

// console.log(ages);
// console.log(adult);

//problem Solving -7 practice

//Quiz game

//print question
//ask for answer
//check for answer and print whether it is wrong or right
/*
(function(){
    function Question(question,options,correct)
{
    this.question=question;
    this.options=options;
    this.correct=correct;
}

Question.prototype.displayQuestion = function(){
    console.log(this.question);
    for(let i=0; i<this.options.length;i++){
        console.log(i+' : '+this.options[i]);
    }
}

Question.prototype.checkAnswer=function(){
    if(this.correct===answer){
        console.log('Correct Answer');
    }
    else{
        console.log('Wrong Answer');
    }
}

var q1=new Question('what is the name tutor of this course?',['Suryansh','Jonas','Ghost'],1);
var q2=new Question('Programming is ?',['Boring','Weired','Fun','cool'],2);
var q3=new Question('Is javaScript same as Java?',['No','Yes','NOTA'],0);


var quiz=[q1,q2,q3];
var n = Math.floor(Math.random()*quiz.length);

quiz[n].displayQuestion();
var answer=parseInt(prompt('Make a choice.'));

quiz[n].checkAnswer();
})();

*/


(function () {
    function Question(question, options, correct) {
        this.question = question;
        this.options = options;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (let i = 0; i < this.options.length; i++) {
            console.log(i + ' : ' + this.options[i]);
        }
    }

    Question.prototype.checkAnswer = function () {
        if (this.correct === answer) {
            console.log('Correct Answer');
        }
        else {
            console.log('Wrong Answer');
        }
    }

    var q1 = new Question('what is the name tutor of this course?', ['Suryansh', 'Jonas', 'Ghost'], 1);
    var q2 = new Question('Programming is ?', ['Boring', 'Weired', 'Fun', 'cool'], 2);
    var q3 = new Question('Is javaScript same as Java?', ['No', 'Yes', 'NOTA'], 0);

    var answer;
    function gameLoop() {
        var quiz = [q1, q2, q3];
        var n = Math.floor(Math.random() * quiz.length);

        quiz[n].displayQuestion();
        answer = prompt('Make a choice.');

        if(answer!=='exit')
        {
            // gameLoop();
            quiz[n].checkAnswer(parseInt(answer));
        }
            
    }

    gameLoop();

})();
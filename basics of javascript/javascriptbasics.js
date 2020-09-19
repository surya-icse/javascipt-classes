/*************************************
    Varibale and data types
*/

// var firstName = 'Suryansh';//camel case notation
// console.log(firstName);
// var last_name = 'Tripathi';
// console.log(last_name);
// var age=21;
// console.log(age);
// var is18 =true;
// console.log(is18);
// var job;
// console.log(job);
// var empty = null;
// console.log(empty);

/*************************************
    Varibale mutation and type coercion
*/

// //type coercion
// var myName = 'Suryansh Mani Tripathi';
// var age = 21;
// console.log(myName +' '+ age);

// var job,isMarried;
// job='Teacher';
// isMarried=true;

// console.log(myName+' is a '+job+' and is '+age+' years old . Is he married ? '+isMarried);
// // variable mutation
// age='Twenty one';
// job='driver';
// alert(myName+' is a '+job+' and is '+age+' years old . Is he married ? '+isMarried);

// var city = prompt('Where does he lives ?','Enter City');
// console.log(myName+' live in '+city);

/*************************************
    Javascipt Operators
*/

// Math Operator

// var num1,num2,add,sub,div,mul;
// num1=12;
// num2=2;
// add=num1+num2;
// sub=num1-num2;
// div=num1/num2;
// mul=num1*num2;
// console.log(add+'\n'+sub+'\n'+div+'\n'+mul);

// // logical operator

// var greaterThan =num1>num2; // greater(>) ,lesser(<)
// console.log(greaterThan);

// // typeof Operator

// var arr=[];
// var nameIs='surya'
// console.log(typeof(greaterThan));
// console.log(typeof(num1));
// console.log(typeof(arr));
// console.log(typeof(nameIs));

/*************************************
    Multiple Assignment
*/

// var x,y;
// x=y=(2+3)/5+1;
// console.log(x+'\n'+y);

// //More Operator

// x*=2;
// console.log(x);

// x+=2;
// console.log(x);

// console.log(x++);

/*************************************
    Coding Challenge-1(Body Mass Index)
*/

// //Height in meter , Mass on Kgs
// var markHeight,johnHeight,markMass,johnMass,johnBMI,markBMI;
// markHeight=1.2;
// johnHeight=1.5;
// markMass=50;
// johnMass=55;
// johnBMI=johnMass/(johnHeight*johnHeight);
// markBMI=markMass/(markHeight*markHeight);
// var greater=markBMI>johnBMI;
// console.log(johnBMI,markBMI);
// console.log('Is Marks\'s BMI is greater than John\'s ? '+greater);

/*************************************
    If-Else Statement
*/

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }


// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var massMark = 78; // kg
// var heightMark = 1.69; // meters

// var massJohn = 92;
// var heightJohn = 1.95;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//     console.log('Mark\'s BMI is higher than John\'s.');
// } else {
//     console.log('John\'s BMI is higher than Marks\'s.');
// }

/*************************************
    Boolean-Logic
*/

// var firstName = 'John';
// var age = 20;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.');
// } else {
//     console.log(firstName + ' is a man.');
// }

/*************************************
    Ternary Operator and Switch statment
*/

// var name = 'john';
// var age = 16;

// age >= 18 ? console.log(name + ' drinks beer.') : console.log(name + ' drinks juice.');
// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// // switch statement 

// var job = 'teacher';
// switch (job) {
//     case 'instructor':
//     case 'teacher': console.log(name + ' teaches to kids');
//         break;
//     case 'plumber': console.log(name + ' is a plumber');
//         break;
//     default: console.log(name + ' does something else');
//         break;
// }

// //boolean logic with switch;

// var firstName = 'John';
// var age = 20;
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
// }


/*************************************
   Coding Problem -2
*/

// var avgJohn =(89 + 120 + 103) / 3;
// var avgMike =(116 + 94 + 123) / 3;
// var avgMary =(97 + 134 + 105) / 3;
// console.log(avgJohn,avgMike,avgMary);

// if(avgJohn > avgMary && avgJohn > avgMike)
// {
//     console.log('John is Winner with score '+avgJohn);
// }
// else if(avgMike > avgMary && avgMike > avgJohn)
// {
//     console.log('Mike is Winner with score '+avgMike);
// }
// else if(avgMary  > avgJohn && avgMary > avgMike)
// {
//     console.log('Mary is Winner with score '+avgMary);
// }
// else
// {
//     console.log('Its a Draw');
// }


/*************************************
    Function
*/

// function calculateAge(birthYear) {
//     return 2020 - birthYear;
// }

// var ageMike = calculateAge(1997);
// var agePopy = calculateAge(1998);
// console.log(ageMike, agePopy);

// function yearUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirementYears = 65 - age;
//     if (retirementYears>0) {
//         console.log(firstName + " will  retire after " + retirementYears + " years");
//     }
//     else{
//         console.log(firstName + " is already retired");
//     }
// }

// yearUntilRetirement(1998, 'Suryansh');
// yearUntilRetirement(1997, 'Rashi');
// yearUntilRetirement(1995, 'Jacob');
// yearUntilRetirement(1942, 'Jai');

/*************************************
    Function statements and expressions
*/

/*
function declaration
function whatDoYouDo(){
    .......
}
*/

// function expression

// var whatDoYouDo = function (job, firstName) {
//     switch (job) {
//         case 'teacher':
//             return firstName + " is a Teacher";
//         case 'mechanic':
//             return firstName + " is a mechanic";
//         default:
//             return firstName + " is no one";
//     }
// }
// console.log(whatDoYouDo('teacher','john'));

/*************************************
    Arrays
*/

// var names = ['john','mark','jane'];
// var year = new Array(12,45,65,43,23);

// console.log(names);
// console.log(names.length);

// //array mutation

// names[1]='suryansh';
// console.log(names);
// names[names.length]='jacob';
// console.log(names);
// console.log(names.length);
// console.log(typeof(names));


// //different data types in array

// var john=['john','smith',1990,false]

// john.push('nice'); //add element at end
// console.log(john); 
// john.unshift('city'); //add element at beginning
// console.log(john); 

// john.pop();  //remove last element 
// console.log(john); 
// john.shift();  //removes first element
// console.log(john); 

// console.log(john.indexOf('smith'));



/*************************************
    Coding problem -3
*/

// function tipCalculator(one, two, three) {

//     var tipAmount = [], finalAmount = [], billWithoutTip = [one, two, three];
//     for (element of billWithoutTip) {
//         if (element <= 50) {
//             let tip = 0.2 * element;
//             tipAmount.push(tip);
//             finalAmount.push(element + tip);
//         }
//         else if (element > 50 && element <= 200) {
//             let tip = 0.15 * element;
//             tipAmount.push(tip);
//             finalAmount.push(element + tip);
//         }
//         else if (element > 200) {
//             let tip = 0.10 * element;
//             tipAmount.push(tip);
//             finalAmount.push(element + tip);
//         }
//     }
//     console.log('Tip amount respectively is ' + tipAmount);
//     console.log('Final Bill (including Tip) respectively is' + finalAmount);
// }

// tipCalculator(124, 48, 268);

/*************************************
    Objects and Properties
*/

// var john = {                     //object literal
//     firstName :'john',
//     lastName : 'smith',
//     birthYear : 1990,
//     family :['jane','mark','bob','emily'],
//     job : 'teacher',
//     isCute : true
// };  
// console.log(john);
// console.log(john.lastName);
// console.log(john['lastName']);
// var x ='isCute';
// console.log(john[x]);
// john.job='teacher';
// john['company'] ='Google';
// console.log(john);

// // Object declaration can also be done as

// var jane = new Object();
// jane.firstName='jane smith';
// jane.hubbyName='john smith';
// console.log(jane);

/*************************************
    Objects and Methods (deep)
*/

// var john = {
//     firstName: 'john',
//     lastName: 'smith',
//     birthYear: 1999,
//     family: ['jane', 'mark', 'bob', 'emily'],
//     job: 'teacher',
//     isCute: true,
//     calcAge: function () {
//         this.age = 2020 - this.birthYear;
//     }
// };

// john.calcAge();
// console.log(john.age);

/*************************************
    Coding Challege 4
*/

// var objMike = {
//     name: 'Mike',
//     mass: 65,
//     height: 1.6,
//     calcBMI: function () {
//         this.bmi = this.mass / (Math.pow(this.height, 2));
//         return this.bmi;
//     }
// };

// var objJohn = {
//     name: 'John',
//     mass: 62,
//     height: 1.5,
//     calcBMI: function () {
//         this.bmi = this.mass / (Math.pow(this.height, 2));
//         return this.bmi;
//     }
// };
// objJohn.calcBMI();
// objMike.calcBMI();   // we can also replace objJohn.calcBMI(); with objJohn.bmi> in if statement
// if(objJohn.bmi>objMike.bmi)
// {
//     console.log('BMI of '+objJohn.name+' is greater , which is '+objJohn.bmi);
// }
// else if(objJohn.bmi<objMike.bmi)
// {
//     console.log('BMI of '+objMike.name+' is greater  , which is '+objMike.bmi);
// }
// else
// {
//     console.log('BMI of Both is Same');
// }

/*************************************
    Loops and Iteration
*/

// // FOR loops
// for (let i =0 ;i<=5;i+=1)
// {
//     console.log(i);
// }

// var john=['john','smith',1990,false];

// for (let i =0 ;i<john.length;i+=1)
// {
//     console.log(john[i]);
// }

// //while loop
// var k=0;
// while(k<=4)
// {
//     console.log(k);
//     k++;
// }

// //continue and break

// for (let i =0 ;i<john.length;i+=1)
// {
//     if(typeof(john[i]) != 'string') 
//     continue;
//     console.log(john[i]);
// }

// for (let i =0 ;i<john.length;i+=1)
// {
//     if(typeof(john[i]) == 'boolean') 
//     break;
//     console.log(john[i]);
// }

/*************************************
    Coding Challenge 5
*/

// var objBill = {
//     arrTip: [],
//     finalBill: [],
//     bill: [124, 48, 268, 180, 42],
//     calcTip: function () {
//         for (var i = 0; i < this.bill.length; i++) {
//             let bill=this.bill[i];
//             if (bill <= 50) {
//                 tip = 0.2 * bill;
//             }
//             if (bill > 50 && bill <= 200) {
//                 tip = 0.15 * bill;
//             }
//             if (bill > 200) {
//                 tip = 0.10 * bill;
//             }
//             this.arrTip[i] = tip;
//             this.finalBill[i] = (tip + bill);
//         }
//     }
// };
// objBill.calcTip();
// console.log('This is the Tip '+objBill.arrTip);
// console.log('This is the Final Bill '+objBill.finalBill);


/*************************************
    
*/

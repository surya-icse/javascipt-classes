// function constructor

var Person = function(name,yearOfBirth,job)  // function constructor
{
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        console.log(2020-this.yearOfBirth);
    }
}

var john = new Person('john wick',1990,'Teacher');
john.calculateAge();

var jane = new Person('jane',1969,'designer');

var mark = new Person('mark',1948,'retired');


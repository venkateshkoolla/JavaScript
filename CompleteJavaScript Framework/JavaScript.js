//// JavaScript + JQuery integration...

////Variables 1
//var name = 'John';
//console.log('FirstName:', name);

////var lastname;
////console.log('LastName:', lastname);

//var age = 25;
//console.log('Age', age);

////Variables 2

//var job, IsMarried;
////console.log(job);
//job = 'Teacher';
//IsMarried = false;
//console.log('FirstName:' + name +  'Age:' + age + 'Is he married?' + IsMarried + '.');

//var lastName = prompt('What is the lastName?');
//console.log(lastName);


// Functions - 
/*
function CalculateAge(yearofBirth)
{
    var age = 2017 - yearofBirth;
    return age;
}

function yearsUntilRetirement(name, Birthyear) {
    var age = CalculateAge(Birthyear);

    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(name + ' Retires in ' + retirement + 'years');
    }
    else
    {
        console.log('Already Retired!');
    }
}

yearsUntilRetirement('John', 1984);
yearsUntilRetirement('Sean', 1990);
yearsUntilRetirement('Tom', 1900);

var a = CalculateAge(1984);
console.log('CurrentOne::'+ a);

*/

//Statements and expressions

//Arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1900, 1991, 1948);
console.log(names[1]);
names[1] = 'venkatesh';
console.log(names);

var john = ['John', 'Smith', 1984, 'teacher', false];
john.push('blue');
console.log(john);
john.unshift('Mr');
console.log(john);
john.pop();
console.log(john);
john.shift();
console.log(john);
if (john[3] === 'Designer') {
    console.log('He is NOT a teacher');
} else
{
    console.log('He is NOT a teacher');
}
*/

// Objects and classes

/*
var john = {
    name: 'John',
    age: 33,
    yearofBirth:1984,
    IsMarried: true,
    Family: ['Jane', 'Ron', 'Kid'],
    //CalAge: CalculateAge(1984)
    CalAge: function() {
       return 2017 - this.yearofBirth;
    }
};

function CalculateAge(yearOfBirth) {
    var age = 2017 - yearOfBirth;
    return age;
};

var age = john.CalAge();

console.log(john.name);
console.log(john.age);
console.log(john.Family);
console.log(john.CalAge());
*/

// Loops and Iterations

/*
var names = ['A', 'James', 'Mark', 'Rohn'];
//console.log('Testing');
//for (var i = 0; i < names.length ; i++)
//{
//    console.log('Counter variable' + names[i]);
//}

var i = 0;
while (i < names.length) {
    console.log('From while loop' + names[i]);
    i++;
}
*/


//Coding Challenge 2
/*
var PersonsYearOfBirths = [1950, 1984, 2007, 2017];
var emptyArray = [];
console.log(PersonsYearOfBirths.length);
for (var i = 0; i < PersonsYearOfBirths.length; i++) {
    //console.log(PersonsYearOfBirths[i]);
    emptyArray.push(PersonsYearOfBirths[i]);
}
// Log the full age and older



for (var i = 0; i < emptyArray.length; i++) {
    var age = calculateAge(emptyArray[i]);
   
    if (age >= 18) {
        console.log('Age of person:' + age);
    }
}
function calculateAge(yearofBirth) {
    return 2017 - yearofBirth;
}

function PrintFullAge(ages) {
    var emptyarray1 = [];

    //for (var i = 0; i < ages.length; i++) {
    //    emptyarray1.push(ages[i]);

    //}

    for (var i = 0; i < ages.length; i++) {
        var age = calculateAge;(ages[i]);
        if (age >= 18) {
            console.log('Age:' + age);
            emptyarray1.push(true);
        } else {
            console.log('Age:' + age);
            emptyarray1.push(false);
        }
    }
    return emptyarray1;
  //return emptyarray1;
    
}

var vector1 = [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2017];
var vector2= [1955, 1965, 1975, 1985, 1995, 2005, 2015, 2017];  
var result1 = PrintFullAge(vector1);
console.log(result1);
var result2 = PrintFullAge(vector2);
console.log(result2);
*/

// Hoisting 04.08
// NO need to worry about the sequence of declaration and functions...

//Scope Chaining
/*Globar();   
function Globar() {
    var a = 'Hi';
    console.log(a);
    Inner1();
    function Inner1() {
        var b = ' I m venkatesh';
        console.log(a + b);
        Inner2();
        function Inner2() {
            var c = ' I m software proffessional';
            console.log(a + b + c);
        }
    }
}
*/


var John = {
    name: 'John',
    family: 'mark',
    yearOfBirth: 1984,
    calculateAge: function() {
        console.log( 2017 - (this.yearOfBirth));
        console.log(this);
    }
// ReSharper disable once DuplicatingPropertyDeclaration
};

John.calculateAge();























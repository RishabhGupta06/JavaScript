// console.log("Hello");
// console.log(`What's going on`);

// window.alert("Are you felling ook");
// window.alert(`What's going on`);

// variable

//  let x;
// x = 100;
//  let y =190;
//  console.log(x);
//  let firstName = "RPG";
//  console.log(typeof y);
// console.log(`My name is ${firstName}`);
//  console.log(`the cost of this item is $${y}`);
//  let online = true;
//  console.log(`the person is online or offile ${online}`);


// Operation


// let student = 10;
// student = student+2;
// student = student**2; // exponent student **= 2;
// student++; // -- 
// student = student % 3; // modulo student %= 3;
// console.log(student);



// now accepting input from user


// let username;
// username = window.prompt("what is your name"); // taking input from the user
// window.alert(username);

// type conversion


// let x = window.prompt("how"); //it is storing in the string
// x = Number(x);
// console.log(typeof x, x);


// Math

// console.log(Math.PI);
// console.log(Math.E);
// let x = 3.21;
// let z = -21;
// let p = 1;
// let q = 21;
// console.log(Math.round(x));
// console.log(Math.ceil(x));
// console.log(Math.trunc(x));
// console.log(Math.pow(x,2));
// console.log(Math.sqrt(x));
// console.log(Math.log(x));
// console.log(Math.sin(x));
// console.log(Math.cos(x));
// console.log(Math.tan(x));
// console.log(Math.abs(x));
// console.log(Math.sign(x));
// console.log(Math.min(x,z,p,q));
// console.log(Math.max(x,z,p,q));



// Random Number generator

// let rand = Math.floor(Math.random() * 6)+1; // number btw 1 and 6
// console.log(rand);
// // let us we have to generate a random number b/w 50 100
// let min = 50;
// let max = 100;
// let ans = Math.floor(Math.random()*(max-min))+min;
// console.log(ans);


// if/ else


// let age = 10;
// if(age>18){
// }
// else if
// else{
// }


// Ternary operator




// string method

// let user = "   rishabh ghpta";
// console.log(user.charAt(0));
// console.log(user.indexOf("h"));
// console.log(user.lastIndexOf("h"));
// console.log(user.length);
// console.log(user);
// user = user.trim();
// console.log(user);
// console.log(user.toUpperCase());
// console.log(user.toLowerCase());
// console.log(user.repeat(2));
// console.log(user.startsWith(" "));
// console.log(user.endsWith("h"));
// console.log(user.replaceAll("h",""));
// const Name = "Rishabh Gupta";
// console.log(Name.slice(0,3));
// console.log(Name.slice(-1));
// const email = "xyz@gmail.com";
// console.log(email.indexOf("gmail"));



// No method chaining


// let username= window.prompt("Enter user name: ");
// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();
// username = username.slice(1);
// username = letter+username;
// console.log(username);


// method

// let username= window.prompt("Enter user name: ");
// console.log( username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase());


// === && ==

// let pi = "3.1";
// if(pi==3.1){ // == this only compair value after type casting the data type
//     console.log("Yes");
//     console.log(typeof pi);
// }
// else if(pi!=3.1)
// if(pi === 3.1){ // it also compair value also data type 
//     console.log("Yes");
// }
// else if(pi!==3.1) console.log("No");



// loop

// for(let i =0;i<3;i++){
    // continue; break;
// }



// number guess game



// function


// function happb( username,  age){
//     console.log("hello!");
//     console.log(`${username}`);
//     console.log(`${age}`);
// }
// happb("rishabh",23)
// function add(x,y){
//     let reult = x+y;
//     return reult;
// }
// let ans = add(2,3);
// console.log(ans);
// function emailcheck(email){
//     if(email.includes("@")) return true;
//     else return false;
// }
// console.log(emailcheck("ga@"));



// array



// let str = ['app','software','application'];
// str.push('user');
// str.pop();
// str.shift();
// str.unshift('gulu');
// let num = str.length;
// let idx = str.indexOf('mango');
// // trives using for loop
// for(let a of str){
    //     console.log(a);
    // }
    // // str.sort().reverse();
    // console.log(str[2]);
    // console.log(str);
    
    
    
    
    
    
    // spread operator = ... 
    
    // let user = 'Rishabh Gupta';
    // let letter = [...user];

    // console.log(letter);
    // let leee = [user];
    // console.log(leee);
    // let letter2 = [...user].join("-");
    // console.log(letter);
    // let number = [1,2,3,4,5];
    // console.log(...number);
    // let maxi = Math.max(...number);
    // // let maxi = Math.max(number); this will not work as it will give error
    // console.log(maxi)
    // let str = ['app','software','application'];
    // let shalow = [...str]; // shalow copy
    
    
    // rest parameter opposite to spread operator



//     function spread(...name){ // combine and store as array
//         console.log(name);
//         return name;
//     }
// let name1 = "Rishabh";
// let name2 = "ishaan";
// let name3 = "alka";
// let name4 = "Ishu";
// let x = spread(name1,name2,name3,name4);


// function getAvg(...number){
//     let result =0;
//     for(let n of number){
//         result += n;
//     }
//     return result;
// }

// let sum = getAvg(10,21,22);
// console.log(sum);




// random passward generator


// call back= a function that is passed as an argument to another function. used to handle asynchronous operations
// sum(call,1,2);

// function sum(l,x,y){
//     let result = x+y;
//     l(result)
// }
// function call(z){
//     console.log(z);
// }





// for each method is used to iterate over the elements of an array and apply a specified function (callback) to each element
// array.forEach(callback)
// it provide element, index, array


// let number = [1,2,3,4,5];
// number.forEach(double);
// number.forEach(display);
// function display(element){
//     console.log(element);
// }
// function double(element,idx,arr){
//     arr[idx] = element*2;
// }




// .map() = its just like a foreach method but the difference is that it return in new array


// const number = [1,2,3,4,5];
// const newarry = number.map(sqr);
// console.log(newarry);
// function sqr(ele,idx,arr){
//     return Math.pow(ele,2);
// }



// const numbers = [1, 2, 3];
// const doubled = numbers.map(function(num) {
//   return num * 2;
// });
// console.log(doubled); // [2, 4, 6]




/// filterThe filter() method in JavaScript is used to create a new array containing only the elements that pass a certain test (the condition you define in a callback function). It doesn’t change the original array—it just returns a filtered version.


// let num = [1,2,3,4,5,6];
// let even = num.filter(iseven);
// console.log(even);
// function iseven(ele){
//     return ele%2 === 0;
// }



// reduce()

// let price = [5,20,25];
// let total = price.reduce(sum);
// console.log(`The amount need to paid is ${total}`);
// function sum(previous,next) {
//     return previous+ next;
// }


// function expression a way to define function as value or variables
 
    // passing as value
    // const num = [1,2,3,4,5,6];
    // let sqr = num.map(function(ele){
    //     return Math.pow(ele,2);
    // });
    // console.log(sqr);


    // storing as variable
    // let dumfun = function(){
    //     console.log("this is how we declare a fuction as a variable");
    // }
    // dumfun();


    // setTimeout(callback, timeout);
    // setTimeout(dumfun,3000);
    // passing as value
    // setTimeout(function() {
    //     console.log("In javascript it is legal to pass the entire function as an arrgument ")
    // }, 4000);



    // Arrow function 

    // const hello = (name,age) => {console.log(`Hello ${name}`)
    //         console.log(`You are ${age} years old`)};

    // hello("Rishabh",13);
    //  // if we have to multiple statement we use curly braces
    // setTimeout(() =>  
    //     console.log("after 3 sec")
    // , 3000);


    // const num = [1,2,3,4,5];
    // let sqr = num.map((ele) => Math.pow(ele,2));
    // let cube = num.map((ele) => Math.pow(ele,3));
    // let evennumb = num.filter((ele) => ele%2 ===0 ); // return statement is not needed if we have one line of code



    // object In JavaScript, an object is a collection of 
    // key–value pairs, where the keys are called properties
    //  (or methods if the value is a function). 
    // Objects are one of the most important data types because
    //  they let you group related data and behavior together.


    // const person = {
    // //  key: value
    //     firstname: "Rishabh",
    //     lastname: "Squarepants",
    //     age: 30,
    //     isEmployed: true,
    //     sayhello: function(){console.log("hi their")},
    // }

    // console.log(person.firstname);
    // person.sayhello();


    // this.name = person.name 


    
// this will not work with arow function


//     const person = {
//   name: "Rishabh",
//   greet: function() {
//     console.log("Hello, my name is " + this.name);
//   }
// };

// person.greet(); // "Hello, my name is Rishabh"



// constructor = special method for defining the properties and methods of object



// function Car(make,model, year){
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }

// let car1 = new Car("Mercedise","mayback",2026);
// console.log(car1.make)


// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = function() {
//     console.log("Hello, my name is " + this.name);
//   };
// }

// const user1 = new Person("Rishabh", 21);
// const user2 = new Person("Krishna", 22);

// user1.greet(); // "Hello, my name is Rishabh"
// user2.greet(); // "Hello, my name is Krishna"



// class


// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//    greet() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age.toFixed(2)} years old.`);
//   };
// }

// const user1 = new Person("Rishabh", 21);
// user1.greet(); 
// Output: Hello, my name is Rishabh and I am 21 years old.



// static

// class matut{
//   static Pi = 3.14;
//   static getdia(radius){
//     return radius*2;
//   }
//   static getcir(radius){
//     return 2*this.Pi*radius;
//   }
// }

// console.log(matut.Pi);
// console.log(matut.getdia(10));
// console.log(matut.getcir(10));


// class Counter {
//   static count = 0;

//   constructor() {
//     Counter.count++;
//   }
// }

// const c1 = new Counter();
// const c2 = new Counter();

// console.log(Counter.count); // 2



// inheritance

// class Vehicle {
//   start() {
//     console.log("Vehicle started");
//   }
// }

// class Car extends Vehicle {
//   drive() {
//     console.log("Car is driving");
//   }
// }

// const myCar = new Car();
// myCar.start(); // "Vehicle started" (inherited)
// myCar.drive(); // "Car is driving" (own method)




/// super
 


// class Animal {
//   constructor(type) {
//     this.type = type;
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super("Dog"); // calls Animal's constructor
//     this.name = name;
//   }
// }

// const myDog = new Dog("Bruno");
// console.log(myDog.type); // "Dog"
// console.log(myDog.name); // "Bruno"



// class Vehicle {
//   start() {
//     console.log("Vehicle started");
//   }
// }

// class Car extends Vehicle {
//   start() {
//     super.start(); // calls Vehicle's start()
//     console.log("Car is ready to drive");
//   }
// }

// const myCar = new Car();
// myCar.start();
// // Output:
// // Vehicle started
// // Car is ready to drive



// getter and setter







// destructuring 

// const numbers = [10, 20, 30];

// // Traditional way
// let a = numbers[0];
// let b = numbers[1];

// // Using destructuring
// let [x, y] = numbers;
// console.log(x); // 10
// console.log(y); // 20

// let [first, , third] = numbers;
// console.log(third); // 30



// const person = { name: "Rishabh", age: 21 };

// // Traditional way
// let name1 = person.name;
// let age1 = person.age;

// // Using destructuring
// let { name, age } = person;
// console.log(name); // "Rishabh"
// console.log(age);  // 21




// nested object

// const user = {
//   id: 1,
//   name: "Krishna",
//   contact: {
//     email: "krishna@example.com",
//     phone: "1234567890"
//   },
//   address: {
//     city: "Lucknow",
//     country: "India"
//   }
// };

// console.log(user.name);            // "Krishna"
// console.log(user.contact.email);   // "krishna@example.com"
// console.log(user.address.city);    // "Lucknow"




// array of object please rewatch



// const students = [
//   { name: "Rishabh", age: 21, course: "Engineering" },
//   { name: "Krishna", age: 22, course: "Computer Science" },
//   { name: "Aman", age: 20, course: "Electrical" }
// ];

// console.log(students[0].name); // "Rishabh"
// console.log(students[1].course); // "Computer Science"



// topic - sort()


// topic - data object


// topic clouser
//topic settime out and cleareTimeout



import {pi,getvalcir,getvalar} from './mathutil.js';
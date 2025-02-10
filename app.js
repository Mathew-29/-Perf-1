/*
var:
The var is the oldest keyword to declare a variable in JavaScript.
This means if you create a variable outside of a function, you can use it anywhere in your code.*/
function f() {

    var a = 10;
    console.log(a)
}
f();

console.log(a);


/*
let:
The let keyword is an improved version of the var keyword.
It can’t be accessible outside the particular code block ({block}).
The variable is only available inside the block {} where you define it.*/
let a = 10;
function f() {
    let b = 9
    console.log(b);
    console.log(a);
}
f();

/*
const:
The const keyword has all the properties that are the same as the let keyword, except the user cannot update it and have to assign it with a value at the time of declaration.
 These variables also have the block scope. It is mainly used to create constant variables whose values can not be changed once they are initialized with a value.*/
 const a = 10;
function f() {
    a = 9
    console.log(a)
}
f();

/*References:https://www.geeksforgeeks.org/difference-between-var-let-and-const-keywords-in-javascript/*/




/*In JavaScript, a falsy value is a value that is considered false when evaluated in a Boolean context. 
When these values are used in conditional statements (like if conditions), they result in the condition being false.
The main falsy values in JavaScript are false, 0, "" (an empty string), null, undefined, and NaN.
For example, the number 0 is falsy because it represents the absence of a value.
Similarly, an empty string "" is falsy as it indicates no text content. null is falsy as it represents the deliberate non-existence of any object value.

Refernces:https://developer.mozilla.org/en-US/docs/Glossary/Falsy*/

/*1.0: The number zero is considered falsy because it represents the absence of any value or quantity.*/

if (0) {
    console.log("This won't print");
} else {
    console.log("0 is falsy"); 
}

/*2."" (empty string): An empty string is falsy because it means there is no text.*/

if ("") {
    console.log("This won't print");
} else {
    console.log("An empty string is falsy");
}

/*3.null: null is falsy because it represents the intentional absence of any object value.*/

if (null) {
    console.log("This won't print");
} else {
    console.log("null is falsy"); 
}


// Question 1
var age = 15;
alert("I am " + age + " years old");

// Question 2
var visits = 1;
alert("You have visited this site " + visits + " times");

// Question 3
var birthYear = 2005;
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof birthYear);


// Question 4
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;

document.write("<br><br>");
document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store");

// 1. Declare 3 variables in one statement
var name, age, city;

// 2. Declare 5 legal and 5 illegal variable names


var userName;
var _name;
var $price;
var my1stVariable;
var studentAge;


// 3. Display in browser

document.write("<h2>Rules for naming JS variables</h2>");

document.write("Variable names can only contain letters, numbers, $ and _.<br>");

document.write("For example $my_1stVariable<br><br>");

document.write("Variables must begin with a letter, $ or _. For example $name, _name or name<br><br>");

document.write("Variable names are case sensitive.<br><br>");

document.write("Variable names should not be JS keywords.");

// 1. Add two numbers
var num1 = 10;
var num2 = 5;
var sum = num1 + num2;
document.write("Sum of 10 and 5 is: " + sum + "<br><br>");


// 2. Subtraction, Multiplication, Division & Modulus
var subtract = num1 - num2;
var multiply = num1 * num2;
var divide = num1 / num2;
var modulus = num1 % num2;

document.write("Subtraction: " + subtract + "<br>");
document.write("Multiplication: " + multiply + "<br>");
document.write("Division: " + divide + "<br>");
document.write("Modulus: " + modulus + "<br><br>");


// 3. JS Mathematical Expressions
var number;

document.write("Value after variable declaration is: " + number + "<br>");

number = 5;
document.write("Initial value: " + number + "<br>");

number++;
document.write("Value after increment is: " + number + "<br>");

number = number + 7;
document.write("Value after addition is: " + number + "<br>");

number--;
document.write("Value after decrement is: " + number + "<br>");

var remainder = number % 3;
document.write("The remainder is: " + remainder + "<br><br>");


// 4. Movie Ticket Cost
var ticketPrice = 600;
var totalCost = ticketPrice * 5;

document.write("Total cost to buy 5 movie tickets is: " + totalCost + " PKR<br><br>");


// 5. Multiplication Table
var tableNumber = 4;

document.write("Multiplication Table of " + tableNumber + "<br>");

document.write(tableNumber + " x 1 = " + tableNumber * 1 + "<br>");
document.write(tableNumber + " x 2 = " + tableNumber * 2 + "<br>");
document.write(tableNumber + " x 3 = " + tableNumber * 3 + "<br>");
document.write(tableNumber + " x 4 = " + tableNumber * 4 + "<br>");
document.write(tableNumber + " x 5 = " + tableNumber * 5 + "<br>");
document.write(tableNumber + " x 6 = " + tableNumber * 6 + "<br>");
document.write(tableNumber + " x 7 = " + tableNumber * 7 + "<br>");
document.write(tableNumber + " x 8 = " + tableNumber * 8 + "<br>");
document.write(tableNumber + " x 9 = " + tableNumber * 9 + "<br>");
document.write(tableNumber + " x 10 = " + tableNumber * 10 + "<br><br>");


// 6. Temperature Converter

var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;

document.write(celsius + "°C is " + fahrenheit + "°F<br>");

var fahrenheitTemp = 70;
var celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;

document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C<br><br>");



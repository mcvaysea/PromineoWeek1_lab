/* //create a variable to hold the quantity of available plane seats left on a flight
let availablePlaneSeats = 16;
		
//create a variable to hold the cost of groceries at checkout
let costOfGroceries = 23.64;

//create a variable to hold a person's middle initial
let middleInitial = "M";

//create a variable to hold true if it's hot outside and false if it's cold outside
let isHotOutside = false;

//create a variable to hold a customer's first name
let customerFirstName = 'Rex';

//create a variable to hold a street address
let streetAddress = "185 Mahalo Dr";

//print all variables to the console
console.log(availablePlaneSeats);
console.log(costOfGroceries);
console.log(middleInitial);
console.log(isHotOutside);
console.log(customerFirstName);
console.log(streetAddress);



//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availablePlaneSeats = availablePlaneSeats - 2;
console.log(availablePlaneSeats);

//impulse candy bar purchase, add 2.15 to the grocery total
//costOfGroceries = costOfGroceries + 2.15;
costOfGroceries = costOfGroceries + 2.15;
console.log(costOfGroceries);

//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = 'C';
console.log(middleInitial);

//the season has changed, update the hot outside variable to be opposite of what it was
isHotOutside = !isHotOutside;
console.log(isHotOutside);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
let fullname = customerFirstName + " " + middleInitial + " King";
console.log(fullname);

//print a line to the console that introduces the customer and says they live at the address variable
console.log("Hi, my name is " + customerFirstName + " and I live at " + streetAddress + "."); */






/* 

//create a variable to hold the quantity of available plane seats left on a flight
let availablePlaneSeats = 52;
console.log(availablePlaneSeats);
		
//create a variable to hold the cost of groceries at checkout
let costOfGroceries = 178.10;
console.log(costOfGroceries);

//create a variable to hold a person's middle initial
let middleInitial = "M";
console.log(middleInitial);

//create a variable to hold true if it's hot outside and false if it's cold outside
let isHotOutside = true;
console.log(isHotOutside);

//create a variable to hold a customer's first name
let custFirstName = "Steven";
console.log(custFirstName);

//create a variable to hold a street address
let myStreetAddress = "185 NE 87th St. South Avenue Blvd.";
console.log(myStreetAddress);

//print all variables to the console
//This is already done//


//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availablePlaneSeats = availablePlaneSeats - 2;
console.log(availablePlaneSeats);

//impulse candy bar purchase, add 2.15 to the grocery total
//costOfGroceries = costOfGroceries + 2.15;
costOfGroceries += 2.15;
costOfGroceries2 = costOfGroceries + 12.15;
console.log(costOfGroceries);
console.log(costOfGroceries2);

//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = "C";
console.log(middleInitial);

//the season has changed, update the hot outside variable to be opposite of what it was
isHotOutside = !isHotOutside;
console.log(isHotOutside);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
let fullName = custFirstName + " " + middleInitial + " Stephens";
console.log(fullName);

//print a line to the console that introduces the customer and says they live at the address variable
console.log("Hello my name is " + fullName + " and I live at " + myStreetAddress); 
*/


/* var num1 = 3;
var num2 = 2;
var x = num1 * 2 + num2 * 3;
console.log(x); */

/* var x = 45;
var y = 16;
x = x - y;
console.log(x); */

/* var num1 = 1;
var num2 = 2;
console.log(num1 * num2); */

/* var x = 30;
var y = 6;
x = x / y;
console.log(x); */


/* var num1 = 52;
var num2 = 45;
console.log(num1 >= num2); */

/* var num1 = 23;
var num2 = 23;
var x = num1 < num2;
console.log(x); */

/* var num1 = 45;
var num2 = 15;
x = num1 / num2;
console.log(x); */

/* var x;
var y = 38;
var z = x + y;
console.log(z); */

/* var num1 = 42;
var num2 = 10;
var x = ((num1 - num2) * 16);
console.log(x); */

/* var x = 8;
var y = 12;
x = y + x;
var z = x + y;
console.log(z); */


/* var num1 = 25;
var num2 = 20;
console.log((num1 + num2) / 5); */

/* var x = 25;
var y = 3;
var z = "Z = " + (x * 2);
console.log(z); */

/* var num1 = 12;
var num2 = 13;
var z = num1 - num2;
console.log(z); */


/* var num1 = 45;
var num2 = 10;
var z = ((num1 * num2) + 10);
console.log(z); */


/* 
var x = 5;
var y = 6;
x = 3 + y;
var z = x + y;
y = 5 + 2 * x;
x = y;
console.log(z); */

/* var num1 = 45;
var num2 = 45;
console.log(num1 === num2); */

/* var struc = true;
console.log(typeof struc); */

/* 
var x = true;
console.log(typeof x);

 */


var myName = "San";

if (myName == 'Sean') {
    console.log('Hey there ' + (myName));
} else {
    console.log('Hello there stranger.');
}
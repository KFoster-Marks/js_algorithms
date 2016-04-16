//Define a function called sum that takes two numbers as arguments and returns their sum.

function sum (a,b) {
	return a + b;
}
sum(7, 5);


//Define a function called isEqual that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.

function isEqual (x, y) {
	return x === y;
}
isEqual(7, 5);
isEqual("Kristen", "Kristen");


//Define a function called isEven that takes an arbitrary whole number as an argument and return a boolean. Return true if the number is even and false if it is not.

function isEven (num) {
	return (num % 2) === 0;
}
isEven(10);

//Define a function called isDivisible that takes two arguments and returns a boolean. Return true if the first argument is divisible by the second; otherwise, return false.

function isDivisible (c, d) {
	return (c % d) === 0;
}
isDivisible(14, 7);

//Define a function called discountPercentage that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning that says "please enter a number between 0 and 100" if the discount amount is greater than 100 or less that 0 percent.

function discountPercentage (amount, discount) {
	return (amount*(discount/100));
}
discountPercentage(20, 75);


//Define a function called isVowel that takes a letter and returns true if the letter is a vowel, and false if the letter is a consonant. //(Treat 'y' as a consonant)

function isVowel (letter) {
	if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u" || letter == "y") {
		return true;
	} else {
		return false;
	}
}
isVowel("d");

//Write code that converts a temperature in Celsius to Fahrenheit.

function tempConversion (c) {
	return (c*(9/5) + 32);
}
tempConversion(9);


//Define a function called biggestOfThree which takes three numbers as arguments, and returns the largest one.

function biggestOfThree (a, b, c) {
	return Math.max(a, b, c);
}
biggestOfThree(2, 87, 45);


//Bonus: Write a function that will estimate your federal income taxes. The function should take just one input: your salary (or future salary, once you graduate!). The link below has information on how federal income taxes are calculated:


function taxEstimate (income) {
	if (income < 9226) {
		return income*(0.9);
	} else if (income < 37451) {
		return income*(0.85);
	} else if (income < 90751) {
		return income*(0.25);
	} else if (income < 189301) {
		return income*(0.28);
	} else if (income < 411501) {
		return income*(0.33);
	} else if (income < 413200) {
		return income*(0.35);
	} else {
		return income*(0.396);
	}
}
taxEstimate(125000);

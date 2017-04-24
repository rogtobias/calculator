var add = function(number1, number2) {
	return number1 + number2;
};

var subtraction = function(number1, number2) {
	return number1 - number2;
};

var multiply = function(number1, number2) {
	return number1 * number2;
};

var divide = function(number1, number2) {
	return number1 / number2;
};

var number1 = parseInt(prompt("Give me a number: "));
var number2 = parseInt(prompt("Give me another number: "));

var sum = add(number1, number2);
alert(sum);

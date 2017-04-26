//backend logic
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

//front end logic
$(document).ready(function() {
	$("form#add").submit(function(event) {
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var result = add(number1, number2);
		$("#output").text(result);
		event.preventDefault();
	});
	$("form#sub").submit(function(event) {
		var number1 = parseInt($("#sub1").val());
		var number2 = parseInt($("#sub2").val());
		var result = subtraction(number1, number2);
		$("#outputS").text(result);
		event.preventDefault();
	});
	$("form#mult").submit(function(event) {
		var number1 = parseInt($("#mult1").val());
		var number2 = parseInt($("#mult2").val());
		var result = multiply(number1, number2);
		$("#outputM").text(result);
		event.preventDefault();
	});
	$("form#division").submit(function(event) {
		var number1 = parseInt($("#division1").val());
		var number2 = parseInt($("#division2").val());
		var result = divide(number1, number2);
		$("#outputD").text(result);
		event.preventDefault();
	});
});

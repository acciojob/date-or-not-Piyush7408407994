var isDate = function (input) {
	return  !isNAN(Date.parse(input));
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));

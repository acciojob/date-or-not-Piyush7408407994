var isDate = function (input) {
	return !isNaN(Date.parse(input));
}
const input = prompt("Enter Date.");
alert(isDate(input));

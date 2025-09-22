var isDate = function (input) {
 
  if (input instanceof Date && !isNaN(input.getTime())) {
    return true;
  }
  
  if (typeof input === "string" || typeof input === "number") {
    return !isNaN(Date.parse(input));
  }
  return false;
};


const input = prompt("Enter Date.");
alert(isDate(input));

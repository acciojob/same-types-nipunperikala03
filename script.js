function isSameType(value1, value2) {
  // Try converting both values to numbers
  let num1 = Number(value1);
  let num2 = Number(value2);

  // If both are valid numbers, return true
  if (!isNaN(num1) && !isNaN(num2)) {
    return true;
  }

  // If both are not numbers, check if both are strings
  if (isNaN(num1) && isNaN(num2)) {
    return true;
  }

  // Otherwise, types are different
  return false;
}

// Do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End of the Range.");
alert(isSameType(value1, value2));

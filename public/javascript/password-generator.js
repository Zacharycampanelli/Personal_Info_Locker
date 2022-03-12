var flags = {
  lowerCase: false,
  upperCase: false,
  numeric: false,
  special: false,
  minLength: 8,
  maxLength: 128,
};

var possibilities = [];

const lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Returns a random length between the specified numbers for the password
function getLength(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// Random number to return a random index in an array
function getRandom(len) {
  return Math.floor(Math.random() * len);
}

// Function to generate the password
function generatePassword() {
  var password = [];

  var lengthFinal;
  // User Prompts
  answer = window.prompt(
    "Do you want lowercase characters? Type 'yes' or 'no'"
  );
  answer = answer.toLowerCase();
  if (answer == "yes") {
    flags.lowerCase = true;
    possibilities.push(...lower);
  } else if (answer == "no") {
    flags.lowerCase = false;
  } else {
    alert("invalid response");
    return false;
  }

  answer = window.prompt(
    "Do you want uppercase characters? Type 'yes' or 'no'"
  );
  answer = answer.toLowerCase();
  if (answer == "yes") {
    flags.upperCase = true;
    possibilities.push(...upper);
  } else if (answer == "no") {
    flags.upperCase = false;
  } else {
    alert("invalid response");
    return false;
  }

  answer = window.prompt("Do you want Numeric characters? Type 'yes' or 'no'");
  answer = answer.toLowerCase();
  if (answer == "yes") {
    flags.numeric = true;
    possibilities.push(...numeric);
  } else if (answer == "no") {
    flags.numeric = false;
  } else {
    alert("invalid response");
    return false;
  }

  answer = window.prompt("Do you want Special characters? Type 'yes' or 'no'");
  answer = answer.toLowerCase();
  if (answer == "yes") {
    flags.special = true;
    possibilities.push(...special);
  } else if (answer == "no") {
    flags.special = false;
  } else {
    alert("invalid response");
    return false;
  }

  if (
    !flags.lowerCase &&
    !flags.upperCase &&
    !flags.numeric &&
    !flags.special
  ) {
    alert("Error: At least one option must be selected");
    return false;
  }

  // Prompt User for length of password
  answer = window.prompt(
    "What is the minimum length of the password? (8 character min)"
  );
  flags.minLength = parseInt(answer);
  if (!Number.isInteger(flags.minLength) || flags.minLength < 8) {
    alert("invalid response");
    return false;
  }

  answer = window.prompt(
    "What is the maximum length of the password? (128 character max)"
  );
  flags.maxLength = parseInt(answer);
  if (
    !Number.isInteger(flags.maxLength) ||
    flags.minLength > flags.maxLength ||
    flags.maxLength > 128
  ) {
    alert("invalid response");
    return false;
  }

  // Create random length for password
  lengthFinal = getLength(flags.minLength, flags.maxLength);

  // Generates password
  for (i = 0; i < lengthFinal; i++) {
    password.push(possibilities[getRandom(possibilities.length)]);
  }

  // Inserts a random character from each prompt option into the password if that option was selected
  var x;
  if (flags.lowerCase) {
    x = getRandom(password.length);
    password[x] = lower[getRandom(lower.length)];
  }

  if (flags.upperCase) {
    x = getRandom(password.length);
    password[x] = upper[getRandom(upper.length)];
  }

  if (flags.numeric) {
    x = getRandom(password.length);
    password[x] = numeric[getRandom(numeric.length)];
  }

  if (flags.special) {
    x = getRandom(password.length);
    password[x] = special[getRandom(special.length)];
  }

  // Return password
  return password.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

const number_input = document.getElementById("number");
const convert_button = document.getElementById("convert-button");
const errorBox = document.getElementById("error");
const output = document.getElementById("output");

function resetResultAndInterpretation() {
  errorBox.textContent = "";
  output.textContent = "You will see your conversion here.";
}

function intToRoman(num) {
  const symbolsList = [
    ["I", 1],
    ["IV", 4],
    ["V", 5],
    ["IX", 9],
    ["X", 10],
    ["XL", 40],
    ["L", 50],
    ["XC", 90],
    ["C", 100],
    ["CD", 400],
    ["D", 500],
    ["CM", 900],
    ["M", 1000],
    ["V\u0305", 5000],
    ["X\u0305", 10000],
    ["L\u0305", 50000],
    ["C\u0305", 100000],
    ["D\u0305", 500000],
    ["M\u0305", 1000000],
  ];

  let i = symbolsList.length - 1;
  let roman = "";
  while (num > 0) {
    const [currentSymbol, currentDivider] = symbolsList[i];
    const result = Math.floor(num / currentDivider);
    if (result > 0) {
      for (let j = 0; j < result; j++) {
        roman += currentSymbol;
      }
      num %= currentDivider;
    }
    i--;
  }
  return roman;
}

function convertNumber() {
  resetResultAndInterpretation();
  const number = number_input.value;

  output.textContent = "";

  if (number <= 0) {
    errorBox.textContent = "Please enter a positive number.";
  } else if (number >= 4000000) {
    errorBox.textContent = "Please enter a number between 1 and 3999999.";
  } else if (number == "") {
    errorBox.textContent = "Please enter a number.";
  } else if (number % 1 !== 0) {
    errorBox.textContent = "Please don't enter a decimal number.";
  } else {
    let roman = intToRoman(number);
    output.textContent = number + "=" + roman;
  }
}
convert_button.addEventListener("click", function (ev) {
  ev.preventDefault();
  convertNumber();
});

number_input.addEventListener("keypress", function (ev) {
  if (ev.key === "Enter") {
    ev.preventDefault();
    convertNumber();
  }
});

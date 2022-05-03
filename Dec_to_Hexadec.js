"use strict";

const equiv = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

function decToHexadec() {
  const decimalNumber = Number(document.querySelector(".decimalNumber").value);

  let number;
  let rest;
  let extraDigits = 0;
  let hexadecimalNumber;

  number = decimalNumber;

  do {
    rest = number % 16;
    number = number / 16;
    if (decimalNumber >= 16) extraDigits++;
  } while (number >= 16);

  if (decimalNumber < 16) {
    hexadecimalNumber = equiv[rest];
  } else {
    hexadecimalNumber = equiv[Math.trunc(number)];
    for (let i = 1; i <= extraDigits; i++) {
      number = number * 16;
      if (rest === 0) {
        hexadecimalNumber = hexadecimalNumber + "0";
      } else {
        hexadecimalNumber = hexadecimalNumber + equiv[Math.trunc(number % 16)];
      }
      number = number % 1;
    }
  }

  document.querySelector(
    ".hexadecimalNumber"
  ).textContent = `Hexadecimal: #${hexadecimalNumber}`;
}

document.querySelector(".decimalNumber").addEventListener("input", function () {
  decToHexadec();
});

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
  const inputNumber = Number(document.querySelector(".decimalNumber").value);

  let decimal;
  let rest;
  let hexadecimal = "";

  decimal = Math.trunc(Math.abs(inputNumber));

  // This part of the code converts the integer part of the decimal number
  do {
    rest = decimal % 16;
    decimal = Math.trunc(decimal / 16);
    hexadecimal = equiv[rest] + hexadecimal;
  } while (decimal > 0);

  // This part of the code converts the fractional part of the decimal number
  if (inputNumber % 1 != 0) {
    let pointDecimal = Math.abs(inputNumber % 1);
    let pointDecimalDiv;
    let pointHexadecimal = "";
    let relation = 1;

    for (let i = 1; i <= 9; i++) {
      relation = relation / 16;
      pointDecimalDiv = Math.trunc(pointDecimal / relation);
      pointHexadecimal = pointHexadecimal + equiv[pointDecimalDiv];
      pointDecimal = pointDecimal % relation;
    }

    hexadecimal = hexadecimal + "." + pointHexadecimal;
  }

  // This part prints to the screen the hexadecimal number and checks for the sign, in case it is negative
  document.querySelector(
    ".hexadecimalNumber"
  ).textContent = `Hexadecimal: #${hexadecimal}`;

  if (inputNumber < 0)
    document.querySelector(
      ".hexadecimalNumber"
    ).textContent = `Hexadecimal: #-${hexadecimal}`;
}

document.querySelector(".decimalNumber").addEventListener("input", function () {
  decToHexadec();
});

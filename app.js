// all variables needs for controlling the app;
const convertFrom = document.getElementById("convertFrom"),
  convertTo = document.getElementById("convertTo"),
  inputField = document.getElementById("input-field"),
  answerField = document.getElementById("answer-field"),
  convert = document.getElementById("convert");

// click handler for when user clicks on convert button convert
convert.addEventListener("click", () => {
  const from = convertFrom.selectedIndex;
  const to = convertTo.selectedIndex;
  if (from === to) {
    // for not conversion
    answerField.value = inputField.value;
  } else if (from === 1 && to === 2) {
    // binary to octal
    answerField.value = binaryToOctal(inputField.value);
  } else if (from === 1 && to === 3) {
    // binary to decimal
    answerField.value = binaryToDecimal(inputField.value);
  } else if (from === 1 && to === 4) {
    // binary to hexadecimal
    answerField.value = binaryToHexaDecimal(inputField.value);
  } else if (from === 2 && to === 1) {
    // octal to binary
    answerField.value = octalToBinary(inputField.value);
  } else if (from === 2 && to === 3) {
    // octal to decimal
    answerField.value = octalToDecimal(inputField.value);
  } else if (from === 2 && to === 4) {
    // octal to hexadecimal
    answerField.value = octalToHexaDecimal(inputField.value);
  } else if (from === 3 && to === 1) {
    // decimal to binary
    answerField.value = decimalToBinary(inputField.value);
  } else if (from === 3 && to === 2) {
    // decimal to octal
    answerField.value = decimalToOctal(inputField.value);
  } else if (from === 3 && to === 4) {
    // decimal to hexadecimal
    answerField.value = decimalToHexadecimal(inputField.value);
  } else if (from === 4 && to === 1) {
    // hexadecimal to binary
    answerField.value = hexadecimalToBinary(inputField.value);
  } else if (from === 4 && to === 2) {
    // hexadecimal to octal
    answerField.value = hexadecimalToOctal(inputField.value);
  } else if (from === 4 && to === 3) {
    // hexadecimal to decimal
    answerField.value = hexadecimalToDecimal(inputField.value);
  }
});

//  if any answer starts with zero or ends with zero then remove it.
const removeZeroForPointing = (num) => {
  while (num.startsWith(0)) {
    num = num.slice(1, num.length);
  }
  while (num.endsWith(0)) {
    num = num.slice(0, num.length - 1);
  }
  return num;
};
const removeZeroForNonPointing = (num) => {
  while (num.startsWith(0)) {
    num = num.slice(1, num.length);
  }
  return num;
};

// all the working functions below
const binaryToOctal = (userInput) => {
  let octalValue = "";
  if (userInput.includes(".")) {
    const splittedNum = userInput.split(".");
    const leftSide =
      splittedNum[0].length % 3 == 0
        ? splittedNum[0]
        : splittedNum[1].length % 3 == 1
        ? "00" + splittedNum[0]
        : "0" + splittedNum[0];
    const rightSide =
      splittedNum[1].length % 3 == 0
        ? splittedNum[1]
        : splittedNum[1].length % 3 == 1
        ? splittedNum[1] + "00"
        : splittedNum[1] + "0";
    const leftSideSliced = [];
    const rightSideSliced = [];
    let leftAns = "";
    let rightAns = "";
    // for left side.
    const divisibleLeft = leftSide.length / 3;
    let m = 0;
    for (let i = 1; i <= divisibleLeft; i++) {
      leftSideSliced.push(leftSide.slice(m, m + 3));
      m += 3;
    }
    for (let j = 0; j < leftSideSliced.length; j++) {
      leftAns +=
        leftSideSliced[j] === "001"
          ? "1"
          : leftSideSliced[j] === "010"
          ? "2"
          : leftSideSliced[j] === "011"
          ? "3"
          : leftSideSliced[j] === "100"
          ? "4"
          : leftSideSliced[j] === "101"
          ? "5"
          : leftSideSliced[j] === "110"
          ? "6"
          : leftSideSliced[j] === "111"
          ? "7"
          : "0";
    }

    // for right side.
    const divisibleRight = leftSide.length / 3;
    let n = 0;
    for (let k = 1; k <= divisibleRight; k++) {
      rightSideSliced.push(rightSide.slice(n, n + 3));
      n += 3;
    }
    for (let l = 0; l < rightSideSliced.length; l++) {
      rightAns +=
        rightSideSliced[l] === "001"
          ? "1"
          : rightSideSliced[l] === "010"
          ? "2"
          : rightSideSliced[l] === "011"
          ? "3"
          : rightSideSliced[l] === "100"
          ? "4"
          : rightSideSliced[l] === "101"
          ? "5"
          : rightSideSliced[l] === "110"
          ? "6"
          : rightSideSliced[l] === "111"
          ? "7"
          : "0";
    }
    return (octalValue = `${removeZeroForPointing(leftAns + "." + rightAns)}`);
  } else {
    const inp =
      userInput.length % 3 == 0
        ? userInput
        : userInput.length % 3 == 1
        ? "00" + userInput
        : "0" + userInput;
    const slicedData = [];
    let finalAns = "";
    const divisible = inp.length / 3;
    let m = 0;
    for (let i = 1; i <= divisible; i++) {
      slicedData.push(inp.slice(m, m + 3));
      m += 3;
    }
    for (let j = 0; j < slicedData.length; j++) {
      finalAns +=
        slicedData[j] === "001"
          ? "1"
          : slicedData[j] === "010"
          ? "2"
          : slicedData[j] === "011"
          ? "3"
          : slicedData[j] === "100"
          ? "4"
          : slicedData[j] === "101"
          ? "5"
          : slicedData[j] === "110"
          ? "6"
          : slicedData[j] === "111"
          ? "7"
          : "0";
    }
    return (octalValue = removeZeroForNonPointing(finalAns));
  }
};
const binaryToDecimal = (userInput) => {
  if (userInput.includes(".")) {
    const splittedNum = userInput.split(".");
    const leftSide = splittedNum[0];
    const rightSide = splittedNum[1];
    let leftDecValue = 0;
    let rightDecValue = 0;
    // for left side.
    for (let i = 0; i < leftSide.length; i++) {
      leftDecValue += leftSide[i] * 2 ** (leftSide.length - (i + 1));
    }
    // for right side.
    for (let j = 0; j < rightSide.length; j++) {
      rightDecValue += rightSide[j] * 2 ** -(j + 1);
    }
    return `${leftDecValue + rightDecValue}`;
  } else {
    const inp = userInput;
    let finalAns = 0;
    for (let i = 0; i < inp.length; i++) {
      finalAns += inp[i] * 2 ** (inp.length - (i + 1));
    }
    return finalAns;
  }
};
const binaryToHexaDecimal = (userInput) => {
  let hexaValue = "";
  if (userInput.includes(".")) {
    const splittedNum = userInput.split(".");
    const leftSide =
      splittedNum[0].length % 4 == 0
        ? splittedNum[0]
        : splittedNum[0].length % 4 == 1
        ? "000" + splittedNum[0]
        : splittedNum[0].length % 4 == 2
        ? "00" + splittedNum[0]
        : "0" + splittedNum[0];
    const rightSide =
      splittedNum[1].length % 4 == 0
        ? splittedNum[1]
        : splittedNum[1].length % 4 == 1
        ? splittedNum[1] + "000"
        : splittedNum[1].length % 4 == 2
        ? splittedNum[1] + "00"
        : splittedNum[1] + "0";
    const leftSideSliced = [];
    const rightSideSliced = [];
    let leftAns = "";
    let rightAns = "";
    // for left side.
    const divisibleLeft = leftSide.length / 4;
    let m = 0;
    for (let i = 1; i <= divisibleLeft; i++) {
      leftSideSliced.push(leftSide.slice(m, m + 4));
      m += 4;
    }
    for (let j = 0; j < leftSideSliced.length; j++) {
      leftAns +=
        leftSideSliced[j] === "0001"
          ? "1"
          : leftSideSliced[j] === "0010"
          ? "2"
          : leftSideSliced[j] === "0011"
          ? "3"
          : leftSideSliced[j] === "0100"
          ? "4"
          : leftSideSliced[j] === "0101"
          ? "5"
          : leftSideSliced[j] === "0110"
          ? "6"
          : leftSideSliced[j] === "0111"
          ? "7"
          : leftSideSliced[j] === "1000"
          ? "8"
          : leftSideSliced[j] === "1001"
          ? "9"
          : leftSideSliced[j] === "1010"
          ? "A"
          : leftSideSliced[j] === "1011"
          ? "B"
          : leftSideSliced[j] === "1100"
          ? "C"
          : leftSideSliced[j] === "1101"
          ? "D"
          : leftSideSliced[j] === "1110"
          ? "E"
          : leftSideSliced[j] === "1111"
          ? "F"
          : "0";
    }
    // for right side.
    const divisibleRight = rightSide.length / 4;
    let n = 0;
    for (let k = 1; k <= divisibleRight; k++) {
      rightSideSliced.push(rightSide.slice(n, n + 4));
      n += 4;
    }
    for (let l = 0; l < rightSideSliced.length; l++) {
      rightAns +=
        rightSideSliced[l] === "0001"
          ? "1"
          : rightSideSliced[l] === "0010"
          ? "2"
          : rightSideSliced[l] === "0011"
          ? "3"
          : rightSideSliced[l] === "0100"
          ? "4"
          : rightSideSliced[l] === "0101"
          ? "5"
          : rightSideSliced[l] === "0110"
          ? "6"
          : rightSideSliced[l] === "0111"
          ? "7"
          : rightSideSliced[l] === "1000"
          ? "8"
          : rightSideSliced[l] === "1001"
          ? "9"
          : rightSideSliced[l] === "1010"
          ? "A"
          : rightSideSliced[l] === "1011"
          ? "B"
          : rightSideSliced[l] === "1100"
          ? "C"
          : rightSideSliced[l] === "1101"
          ? "D"
          : rightSideSliced[l] === "1110"
          ? "E"
          : rightSideSliced[l] === "1111"
          ? "F"
          : "0";
    }
    return (hexaValue = `${removeZeroForPointing(leftAns + "." + rightAns)}`);
  } else {
    const inp =
      userInput.length % 4 == 0
        ? userInput
        : userInput.length % 4 == 1
        ? "000" + userInput
        : userInput.length % 4 == 2
        ? "00" + userInput
        : "0" + userInput;
    const slicedData = [];
    let finalAns = "";
    const divisible = inp.length / 4;
    let m = 0;
    for (let i = 1; i <= divisible; i++) {
      slicedData.push(inp.slice(m, m + 4));
      m += 4;
    }
    for (let j = 0; j < slicedData.length; j++) {
      finalAns +=
        slicedData[j] === "0001"
          ? "1"
          : slicedData[j] === "0010"
          ? "2"
          : slicedData[j] === "0011"
          ? "3"
          : slicedData[j] === "0100"
          ? "4"
          : slicedData[j] === "0101"
          ? "5"
          : slicedData[j] === "0110"
          ? "6"
          : slicedData[j] === "0111"
          ? "7"
          : slicedData[j] === "1000"
          ? "8"
          : slicedData[j] === "1001"
          ? "9"
          : slicedData[j] === "1010"
          ? "A"
          : slicedData[j] === "1011"
          ? "B"
          : slicedData[j] === "1100"
          ? "C"
          : slicedData[j] === "1101"
          ? "D"
          : slicedData[j] === "1110"
          ? "E"
          : slicedData[j] === "1111"
          ? "F"
          : "0";
    }
    return (hexaValue = removeZeroForNonPointing(finalAns));
  }
};
const octalToBinary = (userInput) => {
  const inp = removeZeroForPointing(userInput);
  let finalAns = "";
  for (let i = 0; i < inp.length; i++) {
    finalAns +=
      inp[i] === "1"
        ? "001"
        : inp[i] === "2"
        ? "010"
        : inp[i] === "3"
        ? "011"
        : inp[i] === "4"
        ? "100"
        : inp[i] === "5"
        ? "101"
        : inp[i] === "6"
        ? "110"
        : inp[i] === "7"
        ? "111"
        : inp[i] === "."
        ? "."
        : "000";
  }
  return finalAns;
};
const octalToDecimal = (userInput) => {
  if (userInput.includes(".")) {
    const splittedNum = userInput.split(".");
    const leftSide = splittedNum[0];
    const rightSide = splittedNum[1];
    let leftDecValue = 0;
    let rightDecValue = 0;
    // for left side.
    for (let i = 0; i < leftSide.length; i++) {
      leftDecValue += leftSide[i] * 8 ** (leftSide.length - (i + 1));
    }
    // for right side.
    for (let j = 0; j < rightSide.length; j++) {
      rightDecValue += rightSide[j] * 8 ** -(j + 1);
    }
    return `${leftDecValue + rightDecValue}`;
  } else {
    const inp = userInput;
    let finalAns = 0;
    for (let i = 0; i < inp.length; i++) {
      finalAns += inp[i] * 8 ** (inp.length - (i + 1));
    }
    return finalAns;
  }
};
const octalToHexaDecimal = (userInput) => {
  const binaryValue = octalToBinary(userInput);
  return binaryToHexaDecimal(binaryValue);
};
const decimalToBinary = (userInput) => {
  if (userInput.includes(".")) {
    const splittedNum = userInput.split(".");
    // for left side.
    let leftSide = Number(splittedNum[0]);
    let leftAns = "";
    while (leftSide >= 2) {
      leftAns += leftSide % 2;
      leftSide = Math.floor(leftSide / 2);
    }
    leftAns += 1;
    leftAns = leftAns.split("").reverse().join("");

    // for right side.
    let rightSide = Number("0." + splittedNum[1]);
    let rightAns = "";
    let countingForBreakLoop = 0;
    while (true) {
      rightSide *= 2;
      if (rightSide === 1) {
        rightAns += "1";
        break;
      } else if (rightSide === 0) {
        rightAns += "0";
        break;
      } else if (countingForBreakLoop === 10) {
        break;
      } else if (rightSide > 1) {
        const splitMultipliedVale = String(rightSide).split(".");
        rightAns += splitMultipliedVale[0];
        rightSide = Number("0." + splitMultipliedVale[1]);
      } else {
        const splitMultipliedVale = String(rightSide).split(".");
        rightAns += splitMultipliedVale[0];
      }
      countingForBreakLoop++;
    }
    return `${leftAns}.${rightAns}`;
  } else {
    let inp = Number(userInput);
    let finalAns = "";
    while (inp >= 2) {
      finalAns += inp % 2;
      inp = Math.floor(inp / 2);
    }
    finalAns += 1;
    return (finalAns = finalAns.split("").reverse().join(""));
  }
};
const decimalToOctal = (userInput) => {
  if (userInput.includes(".")) {
    const splittedNum = userInput.split(".");
    // for left side.
    let leftSide = Number(splittedNum[0]);
    let leftAns = "";
    while (leftSide >= 8) {
      leftAns += leftSide % 8;
      leftSide = Math.floor(leftSide / 8);
    }
    leftAns += leftSide;
    leftAns = leftAns.split("").reverse().join("");
    // for right side.
    let rightSide = Number("0." + splittedNum[1]);
    let rightAns = "";
    let countingForBreakLoop = 0;
    while (true) {
      rightSide = rightSide * 8;
      if (rightSide === 1) {
        rightAns += "1";
        break;
      } else if (rightSide === 0) {
        rightAns += "0";
        break;
      } else if (countingForBreakLoop === 10) {
        break;
      } else if (rightSide > 1) {
        const splitMultipliedVale = String(rightSide).split(".");
        rightAns += splitMultipliedVale[0];
        rightSide = Number("0." + splitMultipliedVale[1]);
      } else {
        const splitMultipliedVale = String(rightSide).split(".");
        rightAns += splitMultipliedVale[0];
      }
      countingForBreakLoop++;
    }
    return `${leftAns}.${rightAns}`;
  } else {
    let inp = Number(userInput);
    let finalAns = "";
    while (inp >= 8) {
      finalAns += inp % 8;
      inp = Math.floor(inp / 8);
    }
    finalAns += inp;
    return (finalAns = finalAns.split("").reverse().join(""));
  }
};
const decimalToHexadecimal = (userInput) => {
  if (userInput.includes(".")) {
    const splittedNum = userInput.split(".");
    // for left side.
    let leftSide = Number(splittedNum[0]);
    let leftAns = "";
    while (leftSide >= 16) {
      leftAns +=
        leftSide % 16 === 10
          ? "A"
          : leftSide % 16 === 11
          ? "B"
          : leftSide % 16 === 12
          ? "C"
          : leftSide % 16 === 13
          ? "D"
          : leftSide % 16 === 14
          ? "E"
          : leftSide % 16 === 15
          ? "F"
          : leftSide % 16;
      leftSide = Math.floor(leftSide / 16);
    }
    leftAns += leftSide;
    leftAns = leftAns.split("").reverse().join("");
    // for right side.
    let rightSide = Number("0." + splittedNum[1]);
    let rightAns = "";
    let countingForBreakLoop = 0;
    while (true) {
      rightSide = rightSide * 16;
      if (Number.isInteger(rightSide) === true) {
        rightAns +=
          rightSide === 10
            ? "A"
            : rightSide === 11
            ? "B"
            : rightSide === 12
            ? "C"
            : rightSide === 13
            ? "D"
            : rightSide === 14
            ? "E"
            : rightSide === 15
            ? "F"
            : rightSide;
        break;
      } else if (rightSide === 0) {
        rightAns += "0";
        break;
      } else if (countingForBreakLoop === 10) {
        break;
      } else if (rightSide > 1) {
        const splitMultipliedVale = String(rightSide).split(".");
        rightAns +=
          splitMultipliedVale[0] == 10
            ? "A"
            : splitMultipliedVale[0] == 11
            ? "B"
            : splitMultipliedVale[0] == 12
            ? "C"
            : splitMultipliedVale[0] == 13
            ? "D"
            : splitMultipliedVale[0] == 14
            ? "E"
            : splitMultipliedVale[0] == 15
            ? "F"
            : splitMultipliedVale[0];
        rightSide = Number("0." + splitMultipliedVale[1]);
      } else {
        const splitMultipliedVale = String(rightSide).split(".");
        rightAns += splitMultipliedVale[0];
        rightSide = Number("0." + splitMultipliedVale[1]);
      }
      countingForBreakLoop++;
    }
    return `${leftAns}.${rightAns}`;
  } else {
    let inp = Number(userInput);
    let finalAns = "";
    while (inp >= 16) {
      finalAns +=
        inp % 16 === 10
          ? "A"
          : inp % 16 === 11
          ? "B"
          : inp % 16 === 12
          ? "C"
          : inp % 16 === 13
          ? "D"
          : inp % 16 === 14
          ? "E"
          : inp % 16 === 15
          ? "F"
          : inp % 16;
      inp = Math.floor(inp / 16);
    }
    finalAns += inp;
    finalAns = finalAns.split("").reverse().join("");
    return finalAns;
  }
};
const hexadecimalToBinary = (userInput) => {
  const inp = removeZeroForPointing(userInput);
  let finalAns = "";
  for (let i = 0; i < inp.length; i++) {
    finalAns +=
      inp[i] === "1"
        ? "0001"
        : inp[i] === "2"
        ? "0010"
        : inp[i] === "3"
        ? "0011"
        : inp[i] === "4"
        ? "0100"
        : inp[i] === "5"
        ? "0101"
        : inp[i] === "6"
        ? "0110"
        : inp[i] === "7"
        ? "0111"
        : inp[i] === "8"
        ? "1000"
        : inp[i] === "9"
        ? "1001"
        : inp[i].toUpperCase() === "A"
        ? "1010"
        : inp[i].toUpperCase() === "B"
        ? "1011"
        : inp[i].toUpperCase() === "C"
        ? "1100"
        : inp[i].toUpperCase() === "D"
        ? "1101"
        : inp[i].toUpperCase() === "E"
        ? "1110"
        : inp[i].toUpperCase() === "F"
        ? "1111"
        : inp[i] === "."
        ? "."
        : "0000";
  }
  return finalAns;
};
const hexadecimalToOctal = (userInput) => {
  const binaryValue = hexadecimalToBinary(userInput);
  return binaryToOctal(binaryValue);
};
const hexadecimalToDecimal = (userInput) => {
  const detectHexaValue = (hValue) => {
    return (hValue =
      hValue.toUpperCase() === "A"
        ? 10
        : hValue.toUpperCase() === "B"
        ? 11
        : hValue.toUpperCase() === "C"
        ? 12
        : hValue.toUpperCase() === "D"
        ? 13
        : hValue.toUpperCase() === "E"
        ? 14
        : hValue.toUpperCase() === "F"
        ? 15
        : hValue);
  };
  if (userInput.includes(".")) {
    const splittedNum = userInput.split(".");
    const leftSide = splittedNum[0];
    const rightSide = splittedNum[1];
    let leftDecValue = 0;
    let rightDecValue = 0;
    // for left side.
    for (let i = 0; i < leftSide.length; i++) {
      leftDecValue +=
        detectHexaValue(leftSide[i]) * 16 ** (leftSide.length - (i + 1));
    }
    // for right side.
    for (let j = 0; j < rightSide.length; j++) {
      rightDecValue += detectHexaValue(rightSide[j]) * 16 ** -(j + 1);
    }
    return `${leftDecValue + rightDecValue}`;
  } else {
    const inp = userInput;
    let finalAns = 0;
    for (let i = 0; i < inp.length; i++) {
      finalAns += detectHexaValue(inp[i]) * 16 ** (inp.length - (i + 1));
    }
    return finalAns;
  }
};

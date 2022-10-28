let screen = document.getElementById("screen");
let result = 0;
let toCalculate = [];
let number = [0];
let finalResult = 0;
let operations = ['+', "-", "/", "*"];

function showResult(showNumber) {
    screen.innerHTML = showNumber;
};

function getNumber(x) {
    if (x === '.' && number.filter(x => x === ".").length === 1) {
    } else {
    number.push(x);
    result = +number.join("");
    showResult(result);
};
};

function reset() {
    number = [0];
    toCalculate = [];
    finalResult = 0;
    result = 0;
    showResult(result);
};

function deleteLast() {
    if (number.length > 1 && finalResult === 0) {
        number.pop();
        result = +number.join("");
        showResult(result);
    };
};

function operation(x) {
    switch (x) {
        case "plus": x = "+"; break;
        case "minus": x = "-"; break;
        case "divide": x =  "/"; break;
        case "multiply": x = "*"; break;
        default: break;
    };
    if (operations.indexOf(toCalculate[toCalculate.length - 1]) > -1 && result === 0) {
        toCalculate[toCalculate.length - 1] = x;
        showResult(toCalculate.join(""));
        console.log(toCalculate);
    } else {
        if (toCalculate.length % 2 === 0) {toCalculate.push(result);}
        toCalculate.push(x);
        if (toCalculate.length > 3) {
            calculate();
        };
        showResult(toCalculate.join(""));
        number = [0];
        result = 0;
        console.log(toCalculate);
        };
};

function calculate() {
    if (toCalculate.length >= 3) {
    switch (toCalculate[1]) {
        case "+": finalResult = toCalculate[0] + toCalculate[2]; break;
        case "-": finalResult = toCalculate[0] - toCalculate[2]; break;
        case "/": finalResult = toCalculate[0] / toCalculate[2]; break;
        case "*": finalResult = toCalculate[0] * toCalculate[2]; break;
        default: break;
    };
    toCalculate.unshift(finalResult);
    toCalculate.splice(1, 3);
    console.log(toCalculate);
    };
    showResult(finalResult);
};

function calculate2() {
    if (toCalculate.length !== 0) {
    toCalculate.push(result);
    if (toCalculate.length === 3) {
        switch (toCalculate[1]) {
            case "+": finalResult = toCalculate[0] + toCalculate[2]; break;
            case "-": finalResult = toCalculate[0] - toCalculate[2]; break;
            case "/": finalResult = toCalculate[0] / toCalculate[2]; break;
            case "*": finalResult = toCalculate[0] * toCalculate[2]; break;
            default: break;
        };
        showResult(finalResult);
        result = finalResult;
        toCalculate = [];
        number = [0];
    };};
};

function percent() {
    let doPercent = result / 100;
    result = 0;
    number = [];
    toCalculate.push(doPercent);
    calculate();
};

function squareRoot() {
    result = Math.sqrt(result);
    number = [];
    showResult(result);
}

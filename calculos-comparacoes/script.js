
let num1 = Number(prompt("Enter the 1º number: "));
let num2 = Number(prompt("Enter the 2º number: "));

function simpleCalc (num1, num2) {
    prompt(`The sum is: ${sum(num1, num2)}`);
    prompt(`The subtraction is: ${sub(num1, num2)}`);
    prompt(`The multipication is: ${mult(num1, num2)}`);
    prompt(`The division is: ${div(num1, num2)}`);
    prompt(`The rest of division is: ${restOfDiv(num1, num2)}`);

    evenCheck(sum(num1, num2));
    equalCheck(num1, num2);
};

function evenCheck(num) {
    (num % 2 === 0) ? alert(`The sum is a even: ${num}`) : alert(`The sum isn't a even: ${num}`);
}
function equalCheck(num1, num2) {
    num1 === num2 ? alert(`${num1} and ${num2} are equal`) : alert(`${num1} and ${num2} aren't equal`);
}


let sum = (num1,  num2) => num1 + num2;
let sub = (num1, num2) => num1 - num2;
let mult = (num1, num2) => num1 * num2;
let div = (num1, num2) => num1 / num2;
let restOfDiv = (num1, num2) => num1 % num2;

simpleCalc(num1, num2);


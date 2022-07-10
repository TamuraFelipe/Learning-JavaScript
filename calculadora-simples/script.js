/*
Capturar 2 números e fazer as operações
matemáticas de 
- Soma
- Subtração
- Multiplicação
- Divisão
- e Resto da Divisão
Para cada opeção, mostrar um alerta com o resultado
*/
let num1 = prompt('Digite o primeiro número');
let num2 = prompt('Digite o segundo número');
num1 = Number(num1);
num2 = Number(num2);
let soma = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;
let restOfDiv = num1 % num2;
alert(`SOma = ${soma} \nSubtração = ${sub} \nMultiplicação = ${mult} \nDivisão = ${div} \nResto da Divisão = ${restOfDiv}`);4
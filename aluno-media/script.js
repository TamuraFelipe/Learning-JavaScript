/*  
- Solicitar o nome do aluno e as 3 notas 
- do bimestre e calcular a média daquele aluno.

- Se o aluno passou no bimestre, dar os parabéns.

- Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação

- Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota.
*/

let name = prompt("Student's name: ");
let grade1 = prompt('Nota 1');
let grade2 = prompt('Nota 2');
let grade3 = prompt('Nota 3');
grade1 = Number(grade1);
grade2 = Number(grade2);
grade3 = Number(grade3);

let average = calcAverage(grade1, grade2, grade3);
verifyApproved(average, name);

function calcAverage(grade1, grade2, grade3) {
    let result = ((grade1 + grade2 + grade3) / 3).toFixed(2);
    return result;
}

function verifyApproved(average, name) {
    average >= 6 ? alert(`Congratulations ${name}, you passed with the grade ${average}`) : alert(`Sorry ${name} but, your grade was ${average} - Strive for the proof of recovery`);
}


// Olá pessoa, blz?
//Fiz algumas alterações no projeto. Acredito que não está da melhor maneira, mas tentei elevar o nível para me desafiar! VLWWW


//Objetos
let students = [
    {name: "Felipe", grades: [6, 2, 5]}, {name: "Steffi", grades: [10, 3, 7]}, {name: "Diego", grades: [7, 10, 4]},
    {name: "Yumi",grades: [7, 3, 2]}, {name: "Yumi",grades: [2, 6, 9]}, {name: "Yumi",grades: [9, 0, 6]},
];
//Variáveis
let sum;
let count;
let result;
let media;
let msg;
// Função principal
function main() {
    for (let student of students) {
        sum = 0;
        count = 0;
        let { name } = student;
        for (let grade of student.grades) {
            sum += grade;
            count++;
        }
        media = calcMedia(sum, count);
        result = approvalCheck(media);
        msg = result ? `Congratulations ${name}, you've been APPROVED!` : `Sorry ${name}, you failed. Try Again.`;
        alert(`The average of the student ${name} is: ${media} \n${msg} \n`);
    }
}
// Função que verifica se a média aprova ou não o aluno
let approvalCheck = (media) => {
    let verify = (media >= 7) ? true : false;
    return verify;
};
// Função que faz o calculo da media
let calcMedia = (sum, count) => {
    return (sum/count).toFixed(2);
}
// Iniciando o programa
main();
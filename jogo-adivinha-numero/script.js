/*
**Jogo da advinha**

- Apresente a mensagem ao usuário: "Adivinhe o número que estou pensando? Está entre 0 e 10"

- Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

- Enquanto o usuário não adivinhar o número, mostrar a mensagem: "Erro, tente novamente: "

- Caso o usuário acerte o número, apresentar a mensagem: "Parabéns! Você advinhou o número em x tentativas"

- Substitua o "x" da mensagem, pelo número de tentativas
*/

let guessTheNumber = () => {
    let num = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10");
    num = Number(num);
    compareNumbers(num, randomNumber());
};
let guessAgain = () => {
    requestNumber = prompt(`Erro! Tente novamente:`);
    return requestNumber;
}
const randomNumber = () => {
    let number = Math.round(Math.random() * 10);
    return number;
};
let compareNumbers = (requestNumber, randomNumber) => {
    let attempts = 1;
    while (randomNumber != requestNumber) {
        requestNumber = guessAgain();
        attempts++;
    }
    let pluralText = attempts > 1 ? 'tentatias' : 'tentativa'
    alert(`Parabéns, eu pensei no número ${randomNumber} e você acertou em ${attempts} ${pluralText}`);    
};
guessTheNumber();
const btnTry = document.querySelector('#btnTry')
const btnTryAgain = document.querySelector('#btnTryAgain')
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const messageTryAgain = document.querySelector('#messageTryAgain');
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1

btnTry.addEventListener('click', handleTryClick)
btnTryAgain.addEventListener('click', handleResetClick)
document.addEventListener('keypress', pressEnter)


function handleTryClick(event) {
    event.preventDefault()
    const inputNumber = document.querySelector('#inputNumber')

    if(Number(inputNumber.value) === randomNumber) {
        showScreen2()
        let pluralText = (xAttempts > 1) ? `tentativas` : `tentativa`
        document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} ${pluralText}`
    } else {
        noOpc()
        messageTryAgain.innerText = putMsgTryAgain()
        setTimeout(opcMsg, 2000)
    }

    resetInputNumber()
    xAttempts++
}
function handleResetClick() {
    showScreen1()
    noOpc()
    xAttempts = 1
    createRandomNumber()
    messageTryAgain.innerText = ""
    //console.log(randomNumber)
}
function pressEnter(event) {
    if(event.key == "Enter" && screen1.classList.contains("hide"))
    handleResetClick();
}

function showScreen1() {
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
}
function showScreen2() {
    screen1.classList.add('hide')
    screen2.classList.remove('hide')
}

function createRandomNumber() {
    randomNumber = Math.round(Math.random() * 10);
    return randomNumber
}



function putMsgTryAgain() {
    const messages = [
        "Try Again",
        "Tente novamente",
        "Você consegue",
        "Quase",
        "Pra cima",
        "E tudo bem",
        "Let´s Boraaaa"
    ]
    let randomNumber = Math.round(Math.random() * 6);
    msgAleatoria = messages[randomNumber]
    //console.log(msgAleatoria);
    return msgAleatoria
}
function resetInputNumber() {
    return inputNumber.value = ""
}

function opcMsg() {
    messageTryAgain.style.opacity = 0;
}
function noOpc() {
    messageTryAgain.style.opacity = 1;

}
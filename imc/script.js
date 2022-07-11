/*
Dada uma lista de pacientes, descubra o IMC de cada paciente e impima
    - Paciente x possui o IMC de: y
Crie uma função para fazer o cálculo do IMC
*/

const patients = [
    {
        name: "Luiz",
        age: 20,
        weight: 100,
        height: 190
    },
    {
        name: "Felipe",
        age: 38,
        weight: 95,
        height: 175
    },
    {
        name: "Steffi",
        age: 33,
        weight: 70,
        height: 170
    },
    {
        name: "Flávio",
        age: 26,
        weight: 60,
        height: 180
    },
]

let imcPatient = () => {
    for (let patient of patients) {
        let { name, age, weight, height } = patient;
        let imc = calculateIMC(weight, height);
        console.log(`Patient: ${name}, your IMC is ${imc}`);
    }
}
let calculateIMC = (weight, height) => {
    let imc = Math.ceil((weight / ((height / 100) ** 2))); 
    return imc;
}
imcPatient();
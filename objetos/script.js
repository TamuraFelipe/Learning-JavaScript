/*
Crie uma lista de pacietes

Cada paciente dentro da lista, deverá conter
    - nome
    - idade
    - peso
    - altura

Escreva uma lista contendo o nome dos pacientes
*/

// Object literals
let patient = [
    {
        name: 'Felipe',
        age: 38,
        weight: 95,
        height: 1.75,
    },
    {
        name: 'Steffi',
        age: 33,
        weight: 70,
        height: 1.71,
    },
    {
        name: 'João',
        age: 45,
        weight: 60,
        height: 1.61,
    },
    {
        name: 'Flavio',
        age: 28,
        weight: 70,
        height: 1.90,
    }
]

const patientNames = () => {
    for (let names of patient) {
        let { name, age, weight, height } = names;
        console.log(`${name} has ${age} years old, wighs ${weight}kg and is ${height}m tall.`);    
    }
}
patientNames();

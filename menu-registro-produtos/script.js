/*
Faça um programa que tenha um menu e apresenta a seguinte mensagem::after
- Olá usuário! Digite a opção desejada
    1 - Cadastrar um item na lista
    2 - Mostrar itens cadastrados
    3 - Sair do programa

    O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:
    - Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
    - Caso o usuário digite 2, ele poderá ver os itens cadastrados
    - Se não houver nenhum item cadastrado, mostrar a mensagem: "Não existem itens cadastrados"
    - Caso o usuário digite 3, a aplicação deverá ser encerrada.
*/
   
   
let list = []; //Lista guardando novos itens inseridos

let opt = () => {
    let wichOpt = Number(prompt(`Hello User! Enter the desired option! 
    [1] - Register item 
    [2] - Show the items list 
    [3] - Exit`));
    menuOpt(wichOpt);
}

function menuOpt (num) {
    if (num == NaN) {
        opt();
    } else if (num != 1 && num != 2 &&   num != 3) {
        opt();
    } else {
        wichOpt(num);
    }
}

function wichOpt (num) {
    if (num === 1) {
        registerItem();
    } else if (num === 2) {
        showList();
    } else {
        exit();
    }
}

function registerItem () {
    let item = prompt('Insert a new item: ');
    listOfItems(item);
    opt();
}

let showList = () => {
    alert(list);
    opt();
}

function exit () {
    alert('Thank You!');
    exit;
}

let listOfItems = (item) => {
    list.push(item);
}


opt();
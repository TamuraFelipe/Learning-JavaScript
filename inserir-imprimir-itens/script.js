/*
- Capture 10 itens para compor a lista de um supermercado.

- Após capturar os 10 itens, imprima-os, seprando por virgula
*/

let items = [];
for (let i = 0; i <= 5 ; i++) {
    let item = prompt(`Produto ${i + 1}`);
    items.push(item);
}
alert(items.join(', '));
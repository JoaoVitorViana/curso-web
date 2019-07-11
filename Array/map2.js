const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapís", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

//Retornar Array com apenas o preço
let resultado = carrinho.map((valor) => JSON.parse(valor)).map((valor) => valor.preco);
console.log(resultado);
Array.prototype.map2 = function(func) {
    const ret = [];
    for (let i = 0; i < this.length; i++) {
        ret.push(func(this[i], i, this));
    }
    return ret;
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapís", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }',
]

//Retornar Array com apenas o preço
let resultado = carrinho.map2((valor) => JSON.parse(valor)).map2((valor) => valor.preco);
console.log(resultado);
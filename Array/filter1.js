const produtos = [
    { nome : 'Notebook', preco: 2499, fagil : true },
    { nome : 'iPad Pro', preco: 4199, fagil : true },
    { nome : 'Copo de vidro', preco: 12.49, fagil : true },
    { nome : 'Copo de plástico', preco: 18.99, fagil : false },
]

const acima500 = p => p.preco >= 500
const fragil = p => p.fagil

console.log(produtos.filter(function(p) {
    return p.preco > 6000;
}));

console.log(produtos.filter(acima500).filter(fragil));
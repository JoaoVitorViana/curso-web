Array.prototype.filter2 = function(func) {
    const ret = [];
    for (let i = 0; i < this.length; i++) {
        if (func(this[i], i, this))
            ret.push(this[i]);
    }
    return ret;
}

const produtos = [
    { nome : 'Notebook', preco: 2499, fagil : true },
    { nome : 'iPad Pro', preco: 4199, fagil : true },
    { nome : 'Copo de vidro', preco: 12.49, fagil : true },
    { nome : 'Copo de plástico', preco: 18.99, fagil : false },
]

const acima500 = p => p.preco >= 2500
const fragil = p => p.fagil

console.log(produtos.filter2(acima500).filter2(fragil));
let valor; //
console.log(valor);

valor = null;
console.log(valor);
valor = '';
console.log(valor);
console.log(!!valor);

const produto = {};
console.log(produto.preco);

produto.preco = 3.50;
console.log(!!produto.preco);
delete produto.preco;

console.log(produto);
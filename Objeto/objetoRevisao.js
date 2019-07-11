// coleção dinamica
const produto = new Object;
produto.nome = 'Cadeira';
produto['valor'] = 10.50;
produto['marca do produto'] = 'Generica';

console.log(produto);
delete produto['marca do produto'];

console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        },
        condutores: [{
            nome: 'Junior',
            idade: 19
        }, {
            nome: 'Ana',
            idade: 42
        }],
        calcularValorSeguro: function() {
            //...
        }
    }
};

console.log(carro);
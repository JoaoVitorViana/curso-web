//novo recurso do ES2015
const pessoa = {
    nome: 'Ana',
    idade: 20,
    endereco : {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade : i } = pessoa;
console.log(i, n);

const { endereco: { logradouro, numero, cep } } = pessoa;
console.log(logradouro, cep, numero);
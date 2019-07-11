//anotação literal
const obj1 = {};
console.log(obj1);

//Objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object;
console.log(obj2);

//funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);
    }
}

const p1 = new Produto('Celular', 1500, 0.25);
console.log(p1.getPrecoComDesconto());

//função factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario('Joao', 4800, 4);
const f2 = criarFuncionario('Maria', 11800, 0);
console.log(f1.getSalario(), f2.getSalario());

//Objeto.create
const filha = Object.create(null);
filha.nome = 'Ana';

console.log(filha);

const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON);
console.log(JSON.stringify(fromJSON));
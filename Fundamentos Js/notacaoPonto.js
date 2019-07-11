console.log(typeof console);
console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = 'Bola';
obj1['nome'] = 'Bola2';

console.log(obj1.nome);

function Obj (nome) {
    this.nome = nome;
    this.exec = function(){
        console.log('Exec...');
    }
}

let teste = new Obj('Joao');
const teste2 = new Obj('Teste');
console.log(teste);
console.log(teste2);
teste2.exec();


// ES8: Object.values/Object.entries
const obj = {a: 1, b: 2, c:3};
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Melhorias na Notação Literal
const nome = 'Carla';
const idadePessoa = 15
const pessoa = {
    nome,
    idade : idadePessoa,
    endereço : "Rua A",
    ola() {
        return "Oi gente";
    },
    ola2 : function() {
        return "Olá";
    }
}

console.log(pessoa.nome, pessoa.ola(), pessoa.ola2());

//Class
class Animal {};
class Cachorro extends Animal {
    falar() {
        return "Au Au";
    }
}

console.log(new Cachorro().falar());
// pessoa -> endereço de mémoria -> {...}
const pessoa = { nome: 'Joao' };
pessoa.nome = 'Maria';

console.log(pessoa);

//pessoa = { nome : 'Ana' };

Object.freeze(pessoa);

pessoa.nome = 'Joao';
pessoa.end = 'Rua ABC';
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);
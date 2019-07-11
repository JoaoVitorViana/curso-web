const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
let resultado = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    if (!atual)
        acumulador = false;
    return acumulador;
}, true);

resultado = alunos.map(a => a.bolsista).reduce(todosBolsistas);

console.log('Todos os alunos são bolsistas:', resultado);

const algumBolsista = (resultado, bolsista) => resultado || bolsista;
resultado = alunos.map(a => a.bolsista).reduce(function (acumulador, atual) {
    if (atual)
        acumulador = true;
    return acumulador;
}, false);

resultado = alunos.map(a => a.bolsista).reduce(algumBolsista);

console.log('Algum aluno é bolsita:', resultado);
// sem promisse
const http = require('http');

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    http.get(url, res => {
        let resultado = '';

        res.on('data', dados => {
            resultado += dados;
        })

        res.on('end', () => {
            callback(JSON.parse(resultado));
        })
    });
}

let nomes = [];
getTurma('A', (aluno) => {
    nomes = nomes.concat(aluno.map(a => `A: ${a.nome}`));
    getTurma('B', (aluno) => {
        nomes = nomes.concat(aluno.map(a => `B: ${a.nome}`));
        getTurma('C', (aluno) => {
            nomes = nomes.concat(aluno.map(a => `C: ${a.nome}`));
            console.log(nomes);
        });
    });
});
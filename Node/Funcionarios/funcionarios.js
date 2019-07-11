const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const filtro = funcionario => funcionario.genero === "F" && funcionario.pais === "China";
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual;
}

//china, mulher, salario menor salario
axios.get(url).then(response => {
    let funcionarios = response.data;
    console.log(funcionarios.filter(filtro).reduce(menorSalario));
});
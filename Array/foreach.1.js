const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach(function(valor, index){
    console.log(`${index+1}) ${valor}`);
});

aprovados.forEach(valor => console.log(valor));

aprovados.forEach((valor, index) => {
    console.log(`${index+1}) ${valor}`);
});

const exibir = (aprovado, posicao) => console.log(`${posicao+1}) ${aprovado}`);

aprovados.forEach(exibir);
//Armazenando funcao dentro de varialvel
const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);

//Armazenando funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b;
}

console.log(soma(1, 5));

//retorno implícito
const subtracao = (a, b) => a - b;

console.log(subtracao(2 ,3));

const imprimir2 = a => console.log(a);

imprimir2('Joao');
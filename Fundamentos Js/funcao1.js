//funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(2, 3);

imprimirSoma(2);

imprimirSoma(10, 15, 3);

imprimirSoma();


//funcao com retorno
function soma(a , b = 0){
    return a + b;
}

console.log(soma(45, 5));
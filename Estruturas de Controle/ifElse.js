const imprimirResultado = function(nota) {
    if (nota >= 7){
        console.log('Aprovado!', nota);
    } else {
        console.log('Reprovado!', nota);
    }
}

imprimirResultado(8);
imprimirResultado(6.2);
imprimirResultado('Epaa!');
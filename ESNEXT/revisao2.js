// Arrow Function
const soma = (a, b) => a + b;
console.log(soma(5,15));
const nome = texto => `meu nome é ${texto}`;
console.log(nome('Joao'));
const teste3 = () => {
    return 'Joao';
}
console.log(teste3());

// Arrow Function (this) não muda

// parametro default
function log(texto = 'Node') {
    console.log(texto);
}

log();
log('')
log(null)
log(undefined)

// operador rest
function total(...numeros){
    let total = 0;
    numeros.forEach(n => total+= n);
    return total;
}

console.log(total(1,2,3));
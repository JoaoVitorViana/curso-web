console.log(soma(2, 4));
//console.log(sub(3, 4)); //erro

//tradicional
function soma(x, y) {
    return x + y;
}

//expressão
const sub = function (x, y) {
    return x - y;
}

console.log(sub(3, 4));

//expressão com nome
const mult = function mult(x, y) {
    return x * y;
}
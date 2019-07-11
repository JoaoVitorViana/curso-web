
Array.prototype.forEach2 = function(func) {
    for (let i = 0; i < this.length; i++) {
        func(this[i], i, this);
    }
}
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach2(function(valor, index){
    console.log(`${index+1}) ${valor}`);
});
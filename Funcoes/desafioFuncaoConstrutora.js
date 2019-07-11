function Pessoa(nome) {
    this.falar = function () {
        console.log(nome);
    }
}

const p1 = new Pessoa('Joao');
p1.falar();
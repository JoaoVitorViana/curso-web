function tratarErroELancar(error) {
    //throw new Error('....')
    //throw 10;
    //throw true;
    //throw 'teste';
    throw {
        nome: error.name,
        msg: error.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!!');
    } catch (ex) {
        tratarErroELancar(ex);
    } finally {
        console.log('final');
    }
}

const obj = { nome: 'Joao Viana' };
imprimirNomeGritado(obj);
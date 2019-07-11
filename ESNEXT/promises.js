function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
            //reject(frase);
        }, segundos * 1000);
    });
}

falarDepoisDe(2, 'Que legal')//{ nome: 'Joao', idade : 26})
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e));
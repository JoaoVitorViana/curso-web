const fs = require('fs');

const caminho = __dirname + '/arquivo.json';

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);

// assincrono...
fs.readFile(caminho, 'utf-8', (error, conteudo) => {
    if (!error) {
        const config = JSON.parse(conteudo);
        console.log(`${config.db.host}:${config.db.port}`);
    }
});

// Quando é arquivo JSON
const config = require('./arquivo.json');
console.log(config.db);

//Ler pasta
fs.readdir(__dirname, (error, arquivos) => {
    console.log('Contéudo');
    if (!error) {
        console.log(arquivos);
    }
});
const moduloA = require('../../moduloA');
console.log(moduloA.ola);

// const c = require('./PastaC/index');
const c = require('./PastaC'); // busca o arquivo index.js
console.log(c.ola2);

// const http = require('http');
// http.createServer((req, res) => {
//     res.write('Bom dia!');
//     res.end();
// }).listen(8080);
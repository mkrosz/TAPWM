const fs = require('fs');//Carregando módulo filesystem
const data=fs.readFileSync('file.txt');
// A execução é bloqueada aqui até o arquivo ser lido
console.log(data.toString());
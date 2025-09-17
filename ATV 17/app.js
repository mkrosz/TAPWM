let express = require("express");
let app = express(); //executando o express

app.get('/', function(req,res){
    res.send("<html><body>Site da FATEC Sorocaba</body></html>");
});

app.get('/historia', function(req,res){
    res.send("<html><body>História da FATEC Sorocaba</body></html>");
});

app.get('/cursos', function(req,res){
    res.send("<html><body>Cursos da FATEC Sorocaba</body></html>");
});

app.get('/professores', function(req,res){
    res.send("<html><body>Professores da FATEC Sorocaba</body></html>");
});

app.listen(3000, function () {
  console.log("servidor express foi carregado");
});
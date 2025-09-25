let app= require('./app/config/server');
//carregando o módulo do servidor
let rotaHome= require('./app/routes/home');
rotaHome(app);

let rotaAdicionarUsuario= require('./app/routes/adicionar_usuario');
rotaAdicionarUsuario(app);

let rotaHistoria = require('./app/routes/historia');
rotaHistoria(app);

let rotaCurso = require('./app/routes/cursos');
rotaCurso(app);

let rotaProfessores = require('./app/routes/professores');
rotaProfessores(app);


app.listen(3000, function(){
    console.log("servidor iniciado");
});
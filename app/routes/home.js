module.exports = function(app){
    app.get('/home/index', function(req, res){
        res.render("home/index");
    });
}
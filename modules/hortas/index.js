class Horta {
    constructor(express) {
        console.log("Carregado módulo Horta")
        this.app = express;
        this.startRoutes(this.app);
    }

    startRoutes(app) {
        app.get('/buscaHortas', (req, res) => {
            global.models.garden.find().then(result => {
                console.log(result);
                if(result){
                    res.send({info: result, success: true});
                }else{
                    res.send({info: 'Erro ao fazer login', success: false});
                }
            }).catch(err => res.status(403).send(err));
        })
    }
}

module.exports = Horta;
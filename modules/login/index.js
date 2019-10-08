class Login {
    constructor(express) {
        console.log("Carregado módulo de Login")
        this.app = express;
        this.startRoutes(this.app);
    }

    startRoutes(app) {
        app.post('/login', (req, res) => {
            console.log('cheguei aquiii', req.body)
            models.conta.findOne({login: req.body.user, senha: req.body.senha}).then(result => {
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

module.exports = Login;
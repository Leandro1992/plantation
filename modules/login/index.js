class Login {
    constructor(express) {
        console.log("Carregado módulo de Login")
        this.app = express;
        this.startRoutes(this.app);
    }

    startRoutes(app) {
        app.post('/login', (req, res) => {
            console.log('cheguei aquiii', req.body)
            if(req.body.user && req.body.password){
                res.send({info: "Success Login", success: true});
            }else{
                res.status(404).send({info: "Missing data"})
            }
        })
    }
}

module.exports = Login;
class Login {
    constructor(express) {
        console.log("Carregado módulo de Login")
        this.app = express;
        this.startRoutes(this.app);
    }

    startRoutes(app) {
        app.get('/login', (req, res) => {
            console.log("bateu aqui!")
            res.send('Hello from Login!')
        })
    }
}

module.exports = Login;
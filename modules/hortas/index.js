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

        app.post('/createOrUpdateHorta', (req, res) => {
            console.log(req.body)
            global.models.garden.findById(req.body._id).then(result => {
                if(result){
                    result.nome = req.body.nome; 
                    result.save().then(final => {
                        res.send({info: final, success: true})
                    }).catch(err => res.status(403).send(err));
                }else{
                    global.models.garden.create(req.body).then(result => {
                        console.log(result);
                        if(result){
                            res.send({info: result, success: true});
                        }else{
                            res.send({info: 'Erro ao criar horta', success: false});
                        }
                    }).catch(err => res.status(403).send(err));
                }
            }).catch(err => res.status(403).send(err));  
        })
    }
}

module.exports = Horta;
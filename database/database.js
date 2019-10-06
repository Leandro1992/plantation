const mongoose = require('mongoose');
const contaSchema = require('./models/conta');
const gardenSchema = require('./models/garden');
const sensorSchema = require('./models/sensor');
const eventosSchema = require('./models/eventos');
const plantasSchema = require('./models/plantas');
const sensorReadSchema = require('./models/sensor_reads');
global.models = {}

mongoose.connect('mongodb://localhost/plantation', { useNewUrlParser: true, useUnifiedTopology: true });
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    global.models.conta     = mongoose.model('Conta', contaSchema);
    global.models.garden    = mongoose.model('Garden', gardenSchema);
    global.models.sensor    = mongoose.model('Sensor', sensorSchema);
    global.models.evento    = mongoose.model('Evento', eventosSchema);
    global.models.planta    = mongoose.model('Planta', plantasSchema);
    global.models.leitura   = mongoose.model('Leitura', sensorReadSchema);


    //TESTES DE CONEXÃO E CRIAÇÃO DE DADOS NO BANCO

    // Garden.find().populate('conta').then(function(data){
    //     console.log(data)
    // }).catch(function(err){
    //     console.log(err)
    // });;

    // let garden = new Garden({
    //     nome: 'Teste',
    //     conta: '5d9a5520ad390b4284cb30cf',
    // })

    // garden.save().then(function(data){
    //     console.log(data)
    // }).catch(function(err){
    //     console.log(err)
    // });
});

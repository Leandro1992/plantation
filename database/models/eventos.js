var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new Schema({
    nome: { type: String, required: true },
    conta: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Conta'
    },
    garden: {
        type: Schema.Types.ObjectId,
        ref: 'Garden'
    },
    sensor: {
        type: Schema.Types.ObjectId,
        ref: 'Sensor'
    },
    tipo: String,
    descricao: String
},
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);
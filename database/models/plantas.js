var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new Schema({
    nome: { type: String, required: true },
    luminosidade: String,
    tmax: Number,
    tmin: Number,
    agua: String,
    colheita: Number
},
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    cpf: { type: String, required: true },
    telefone: { type: String, required: true },
    login: { type: String, required: true },
    senha: { type: String, required: true },
},
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);
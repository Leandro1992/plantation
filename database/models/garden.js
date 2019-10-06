var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new Schema({
    nome: { type: String, required: true },
    conta: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Conta'
    },
    data_fim: { type: Date },

},
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);
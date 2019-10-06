var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new Schema({
    sensor: {
        type: Schema.Types.ObjectId,
        ref: 'Sensor'
    },
    luminosidade: Number,
    temperatura: Number,
    umidade: Number,
    umidade_solo: Number

},
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);
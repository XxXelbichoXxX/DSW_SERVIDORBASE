const mongoose = require('mongoose');

let movieSchema = new mongoose.Schema({
    "id": {type: Number},
    "nombre": {type: String},
    "director" : {type: String},
    "anio" : {type: Number},
    "duracion" : {type: Number},
    "genero" : {type: String},
})

module.exports = mongoose.model('Movie', movieSchema, 'movie');
const mongoose = require('mongoose');

mongoose.connect
(
    //'mongodb+srv://root:U8z4zOtL8z6Qph51@cluster0.ypk3zy7.mongodb.net/libreria-db?retryWrites=true&w=majority'
    'mongodb+srv://root:U8z4zOtL8z6Qph51@cluster0.ypk3zy7.mongodb.net/movies-db?retryWrites=true&w=majority'
)
.then(()=> console.log('Conexión exitosa a MongoDB'))
.catch(err => console.error('Errror al conectar a MongoDB:', err));

module.exports = mongoose;
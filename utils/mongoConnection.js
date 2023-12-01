const mongoose = require('mongoose');

mongoose.connect
(
    'mongodb+srv://admin:acTyIbUXXNzEk90w@cluster0.aiiyipe.mongodb.net/movies-db?retryWrites=true&w=majority'
)
.then(()=> console.log('Conexión exitosa a MongoDB'))
.catch(err => console.error('Errror al conectar a MongoDB:', err));

module.exports = mongoose;
const express = require('express');
const morgan = require('morgan');

require('./utils/mongoConnection');

const bookRouter = require('./routers/books.router');
const movieRouter = require('./routers/movies.router');

const app = express();
const port = 3003;

app.use(morgan('dev'));


app.get('/', (req, res) => {
    res.send('Bienvenido a Libreria API')
})

//app.use(express.json({limit: '50mb'}));
//app.use('/books', bookRouter);
app.use(express.json({limit: '50mb'})
app.use('/movies', movieRouter);

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
})

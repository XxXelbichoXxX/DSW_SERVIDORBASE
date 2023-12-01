const express = require('express');
const morgan = require('morgan');

require('./utils/mongoConnection');


const movieRouter = require('./routers/movies.router');
const userRouter = require('./routers/users.router');

const app = express();
const port = 3003;

app.use(morgan('dev'));

app.use(express.json({limit: '50mb'}));

app.use('/movies', movieRouter);
app.use('/users', userRouter);


app.get('/', (req, res) => {
    res.send('Bienvenido a Libreria API')
})



app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
})

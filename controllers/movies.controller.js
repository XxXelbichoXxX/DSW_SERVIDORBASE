const Movie = require('../models/movie.model');
exports.getMovies = async (req, res) => {
    try{
        const movies = await Movie.find();
        return res.status(200).json({
            message : "Peliculas encontradas",
            data : movies
        })
    }catch (error) {
        return res.status(404).json({
            message : "Error al consultar peliculas",
            data: error
        })
    }
}
exports.getMoviesById = async (req, res) => {
    const movieId=req.params.movieId;
    try{
        const movie = await Movie.findById(movieId);
        return res.status(200).json({
            message : "Pelicula encontrada por ID: "+movieId,
            data : movie
        })
    }catch (error) {
        return res.status(404).json({
            message : "Error al consultar pelicula",
            data: error
        })
    }
}


exports.newMovie = async (req, res) => {
    try{
        const {id, nombre, director, anio, duracion, genero} = req.body;
        const newMovie = new Movie({id, nombre, director, anio, duracion, genero});
        await newMovie.save();
        return res.status(200).json({
            message : "Pelicula registrada",
            data: newMovie
        })
    }catch (error) {
        return res.status(404).json({
            message : "Error al registrar la pelicula",
            data: error
        })
    }
}

exports.updateMovie = async (req, res) => {
    const movieId=req.params.movieId;
    newData = req.body;
    try{
        const updateMovie= await Movie.findByIdAndUpdate(movieId, newData, {new: true});
        return res.status(201).json({
            message : "Actualizando pelicula encontrada por ID: "+movieId,
            data: updateMovie
        })
    }catch (error) {
        return res.status(404).json({
            message : "Error al editar pelicula",
            data: error
        })
    }
}

exports.deleteMovie = async (req, res) => {
    const movieId=req.params.movieId;
    try{
        await Movie.findByIdAndDelete(movieId);
        return res.status(201).json({
            message : "Pelicula eliminada encontrada por ID: "+movieId
        })
    }catch (error) {
        return res.status(404).json({
            message : "Error al eliminar pelicula",
            data: error
        })
    }
}
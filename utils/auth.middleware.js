const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({
            message: 'No se proporciono un token de acceso'
        })
    }

    jwt.verify(token, 'secreto', (error, decoded) => {
        if(error){
            return res.status(401).json({
                message: 'Token invalido'
            })
        }
        req.userId = decoded.userId;
        next();
    });
}
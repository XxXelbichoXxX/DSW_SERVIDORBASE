const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

exports.registerUser = async (req, res) => {
    try{
        const {userName, email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            userName,
            email,
            password : hashedPassword
        });
        await user.save();
        return res.status(201).json({
            message : "Usuario creado exitosamente",
            data : user
        });
    }
    catch (error) {
        return res.status(400).json({
            message : "Error al registrar usuario",
        });
    }
}

exports.getUsers = async (req, res) => {
    try{
        const users = await User.find();
        return res.status(200).json({
            data : users
        });
    }
    catch (error) {
        return res.status(404).json({
            message : "Error al obtener usuarios",
            data: error
        });
    }
};

exports.loginUser = async (req, res) => {
    try{
        const {email, password} = req.body;
        await User.findOne({email}).then(async (user) => {
            if (!user) {
                return res.status(404).json({
                    error : "Credenciales invalidas",
                });
            }
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(400).json({
                    error : "Contraseña incorrecta",
                })
            }
            const token = jwt.sign({userId : user._id}, 'secreto', {expiresIn : '8h'});
            
            let formatUser = {
                _id : user._id,
                userName : user.userName,
                email : user.email,
            };
            return res.status(200).json({
                user: formatUser,
                token: token,
                action: 'login'
            });
        }).catch(err => {
            return res.status(404).json({
                action: 'login',
                error: error
            })
        })
    }
    catch (error) {
        return res.status(404).json({
            error : "Error al iniciar sesion",
        })
    }
};
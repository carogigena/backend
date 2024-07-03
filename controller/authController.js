const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config/config');
const db = require('../db/db');


// Función para registrar un nuevo usuario
exports.register = (req, res) => {
    
    const { username, password } = req.body; 
    const hashedPassword = bcrypt.hashSync(password, 8); 

    const newUser = { id: users.length + 1, username, password: hashedPassword }; 

    users.push(newUser); 

    // Genera un token JWT para el nuevo usuario
    const token = jwt.sign({ id: newUser.id }, config.secretKey, { expiresIn: config.tokenExpiresIn });
     // Envía el token como respuesta al cliente
    res.status(201).send({ auth: true, token }); 
};

// Función para iniciar sesión de un usuario
 exports.login = (req, res) => {
    const { username, password } = req.body; 
    
    const user = users.find(u => u.username === username); 
    if (!user) return res.status(404).send('User not found.'); 
    
    const passwordIsValid = bcrypt.compareSync(password, user.password); 
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null }); 
    
    const token = jwt.sign({ id: user.id }, config.secretKey, { expiresIn: config.tokenExpiresIn }); 
    res.status(200).send({ auth: true, token }); 
 };
 


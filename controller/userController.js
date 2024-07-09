const db = require('../db/db');
const bcrypt = require('bcryptjs');


// Función para obtener todos los usuarios
const obtenerTodosLosUsuarios = (req,res) => {
    const sql = 'SELECT * FROM usuarios';

    db.query(sql, (err,results) => 
    {
        if(err)
            throw err;

        res.json(results);
    });
}

// Función para obtner un usuario por ID
const obtenerUsuarioPorId = (req,res) => 
{
    const {id} = req.params;
    const sql = 'SELECT * FROM usuarios WHERE idusuario = ?'

   db.query(sql, [id] ,(err, result) => 
   {
        if(err) throw err;

        res.json(result);
   });

}

// Función para crear un usuario
const crearUsuario = (req,res) => 
{
    const {nombres,apellidos,dni,provincias_idprovincias,tipousuario_idtipousuario, email,usuario,password,genero_idgenero} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8); 

    const sql = 'INSERT INTO usuarios (nombres,apellidos,dni,provincias_idprovincias,tipousuario_idtipousuario,email,usuario,password,genero_idgenero) VALUES (?,?,?,?,?,?,?,?,?)'

    db.query(sql, [nombres,apellidos,dni,provincias_idprovincias,tipousuario_idtipousuario, email,usuario,hashedPassword,genero_idgenero], (err,result) => 
    {
         if(err) throw err;

        res.json(
            {
                mensaje : "Usuario Creado con EXITO",
                idUsuario : result.insertId
            });
  
}); 
    
}



// Función para iniciar sesión de un usuario
    const login =(req, res) =>{
        
        const {usuario, password} = req.body;
        const sql = 'SELECT * FROM usuarios WHERE usuario = ?' 

        db.query(sql, [usuario], (err, result) =>{
           
        if(!result || result.length == 0) return res.status(400).send('Usuario no encontrado');

        const comparePassword = bcrypt.compareSync(password, result[0].password);
        if(!comparePassword) return res.status(401).send({auth:false});
            
        res.status(200).send({ mensaje : "Usuario logueado con EXITO"});
        }
        )};


// Función para modificar datos de un usuario
const actualizarUsuario = (req,res) => 
{
    const {id} = req.params;
    const {nombres,apellidos, email,usuario,} = req.body;
   
    const sql = 'UPDATE usuarios SET nombres = ?, apellidos = ?, email = ?, usuario = ? WHERE idusuario  = ?'

    db.query(sql, [nombres,apellidos, email, usuario, id], (err,result) => 
    {
        if(err) throw err;

        res.json({
            mensaje : "Usuario EDITADO"
        })
    });
}


// Función para borrar un usuario
const borrarUsuario = (req,res) => 
{
    const {id} = req.params;

    const sql = 'DELETE FROM usuarios WHERE idusuario = ?';

    db.query(sql,[id],(err,result) => 
    {
        if(err) throw err;

        res.json(
            {
                mensaje : "usuario ELIMINADO con EXITO"
            })

    });
}


module.exports = 
{
    obtenerTodosLosUsuarios,
    obtenerUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario,
    login
};


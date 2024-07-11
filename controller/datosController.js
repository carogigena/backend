const db = require('../db/db');

const ObtenerGenero = (req,res) =>{
    const sql = 'SELECT * FROM genero';
    db.query(sql, (err,results) => 
    {
        if(err)
            throw err;

        res.json(results);
    });
}

const ObtenerProvincias = (req,res) =>{
    const sql = 'SELECT * FROM provincias';
    db.query(sql, (err,results) => 
    {
        if(err)
            throw err;

        res.json(results);
    });
}

const ObtenerTipoUsuario = (req,res) =>{
    const sql = 'SELECT * FROM tipousuario';
    db.query(sql, (err,results) => 
    {
        if(err)
            throw err;

        res.json(results);
    });
}
/*
const ObtenerProductosporTipo = (req,res) =>{
    const {id}= req.params;
    const sql = 'SELECT * FROM productos where tipoproducto_idtipoproductos = ?';
    db.query(sql, [id], (err,results)=>
    {

        if(err)
            throw err;

        res.json(results);
    });
}
*/
module.exports = 
{
    ObtenerGenero,
    ObtenerProvincias,
    ObtenerTipoUsuario
}
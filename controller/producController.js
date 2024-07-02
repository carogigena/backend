const db = require('../db/db');



const ObtenerTodosLosProductos = (req,res) => {
    const sql = 'SELECT * FROM productos';

    db.query(sql, (err,results) => 
    {
        if(err)
            throw err;

        res.json(results);
    });
}

const ObtenerProductoPorId = (req,res) => 
{
    const {id} = req.params;
    const sql = 'SELECT * FROM productos WHERE idproducto = ?'

   db.query(sql, [id] ,(err, result) => 
   {
        if(err) throw err;

        res.json(result);
   });

}

const crearProducto = (req,res) => 
{
    const {descripcion,nombre,precio,tipoproducto_idtipoproducto} = req.body;

    const sql = 'INSERT INTO productos (nombre,descripcion,precio,tipoproducto_idtipoproducto) VALUES (?,?,?)';

    db.query(sql,[nombre,descripcion,precio,tipoproducto_idtipoproducto], (err,result) => 
    {
        if(err) throw err;

        res.json(
            {
                mensaje : "Producto Creado con EXITO",
                idProducto : result.insertId
            });

    });


}

const ActualizarProducto = (req,res) => 
{
    console.log(req.params);
    const {id} = req.params;
    const {nombre,descripcion,precio,tipoproducto_idtipoproducto} = req.body;

    const sql = 'UPDATE productos SET nombre = ?, descripcion = ? , precio = ? , tipoproducto_idtipoproducto =? WHERE id = ?'

    db.query(sql, [nombre,descripcion,precio,tipoproducto_idtipoproducto,id], (err,result) => 
    {
        if(err) throw err;

        res.json({
            mensaje : "Producto EDITADO"
        })
    });
}



const BorrarProducto = (req,res) => 
{
    const {id} = req.params;

    const sql = 'DELETE FROM Productos WHERE id = ?';

    db.query(sql,[id],(err,result) => 
    {
        if(err) throw err;

        res.json(
            {
                mensaje : "producto ELIMINADO con EXITO"
            })

    });
}


module.exports = 
{
    ObtenerTodosLosProductos,
    ObtenerProductoPorId,
    crearProducto,
    ActualizarProducto,
    BorrarProducto
}
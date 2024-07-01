const express = require("express");
const morgan = require('morgan');
const database = require("./db");

const app = express();

const usuariosRouter = require('./routes/usuarios');

app.use(express.json());

app.use('/usuarios',usuariosRouter);


/*app.listen(port , () => 
{
    console.log(`Servidor ejecutandose en el puert ${port}`)
});
*/
const PORT = process.env.PORT || 3000;
const HOST = 'jcgigena.alwaysdata.net';// process.env.HOST || 'http://localhost';
app.listen(PORT, ()=> console.log(`${HOST}:${PORT}`));

app.get('/', (req,res) => 
    {
        res.send(`HOLA DESDE EL HOST ${HOST}, PUERTO:${PORT}`);
    });

    app.get("/productos", async (req,res) =>{
        res.send(`VIVERO `);
        const conn = await database.getConnection();
        //res.send(`VIVERO ${conn}`);
        if (!conn || !conn.connection || conn.connection._closing) {
            winston.info('Connection is in a closed state, getting a new connection');
            await conn.destroy(); // Toast that guy right now
            sleep.sleep(1); // Wait for the connection to be destroyed and try to get a new one, you must wait! otherwise u get the same connection
            conn = await connPool.connection.getConnection(); // get a new one
          }
        const result = connection.query("SELECT * FROM productos");
        console.log(result);
    });
        
//Uso middleware
/*app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res)=> {
    res.send("VIVERO APP 12 !! ");
});

app.get("/productos", async (req,res) =>{
    //const connection = await database.connection();
    //res.send(`VIVERO ${connection}`);
    const result = connection.query("SELECT * FROM productos");
    console.log('Productos');
});

const PORT = process.env.PORT || 3000;
const HOST = 'mysql-jcgigena.alwaysdata.net';// process.env.HOST || 'http://localhost';
app.listen(PORT, ()=> console.log(`${HOST}:${PORT}`));

console.log("VIVERO backend!!");
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST|| 'http://localhost';
app.listen(PORT, ()=> console.log(`${HOST}:${PORT}`));

app.get("/productos", async (req,res) =>{
    const connection = await database.connection();
    const result = connection.query("SELECT * FROM productos");
    console.log(result)
});*/
/*//Importamos el modulo express y lo instanciamos
const express = require('express');
const morgan = require('morgan');
const database = require("./db")

//Configuracion inicial 
const app = express();

//Declaramos el puerto
const PORT = 3000;


//Uso middleware
app.use(express.json());
app.use(morgan("dev"));



//Rutas
app.get("/productos", async (req,res) =>{
    const connection = await database.connection();
    const result = connection.query("SELECT * FROM productos");
    console.log(result)
});

app.get("/", (req, res)=> {
    res.send("VIVERO XXX!!");
});

// Start server
app.listen(PORT, ()=>{console.log(`Servidor escuchando en el puerto ${PORT}`)});
*/
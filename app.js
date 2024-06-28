//Importamos el modulo express y lo instanciamos
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

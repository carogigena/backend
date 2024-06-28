const mySql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config()


const connection = mySql.createConnection(
    {
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database,
});  

connection.connect((err) =>
    {
    if(err)
        {
            console.error("Error conectando a la base de datos", err);
            return;
        }
    
    console.log("Conectado a la base de datos");

    
    /*connection.query("CREATE DATABASE IF NOT EXISTS cgigena_vivero", (err, result) =>
    {
        if(err)
            {
                console.log("Error creando la base de datos");
                return;
            }
        
        console.log("Base de datos asegurada");

        connection.changeUser({database: 'cgigena_vivero'}, err => {
            if(err)
                {console.error("Error al cambiar a cgigena_vivero", err);
                    return;
                }

        const createTableQuery = `
        CREATE TABLE IF NOT EXISTS usuarios_db (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nombre VARCHAR(100) NOT NULL,
            apellido VARCHAR(100) NOT NULL,
            mail VARCHAR(255) NOT NULL
        );
    `;
    */            
    /*    connection.query(createTableQuery,(err, results) =>
        {
            if(err)
                {
                    console.log("Error creando la tabla:", err);
                    return;
                }

            console.log("Tabla asegurada");
        });
    });
});*/
});

module.exports = connection;

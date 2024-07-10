const mySql = require('mysql2');
const connection = mySql.createConnection(
    {
        host: 'mysql-jcgigena.alwaysdata.net',//process.env.host,
        user: 'jcgigena',//process.env.user,
        password: '&Grupo28',//process.env.password,
        database: 'jcgigena_vivero',//process.env.database,
        connectionLimit:10,
        connectTimeout : 1000000,
        waitForConnections: true,
        queueLimit: 0
    });


    connection.connect((err) =>
    {
        if(err)
        {
            console.error("Error conectando a la base de datos",err);
            return;
        }


        console.log("Conectado a la base de datos.");

});


module.exports = connection;

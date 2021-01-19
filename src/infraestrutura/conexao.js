// const mssql = require('mssql');

// const conexao = mssql.ConnectionPool({
//     user: 'GAMELEIRA',
//     password: 'n3@270499-Biel!'
// })

// conexao.connect

const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'n3@270499-Biel!',
    database: 'petshop'
});

module.exports = conexao;
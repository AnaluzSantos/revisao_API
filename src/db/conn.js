// Importando o banco de dados mysql
const mysql = require("mysql2");

const conn = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "aluno_medio",
    password: "@lunoSenai23.",
    database: "Lista_Compras",
});

//Conectando com o banco de dados
conn.connect((error) => {
    //Verificando se tem algum erro
    if(error) {
        console.log(error);
    }

    //Caso não tenha nenhum erro, significa que foi estabelecida uma conexão om o banco de dados.
    console.log("MySQL conectado!");
});

// Exportando o módulo
module.exports = conn;

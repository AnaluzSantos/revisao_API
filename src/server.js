// Importando o framework express
const express = require("express");

// Importando a engenharia de template handlebars
const exphbs = require("express-handlebars");

// Importando o arquivo que conté, a conexão com o banco de dados
const conn = require("./db/conn");

// Declarando a variável PORT para colocar a porta do servidor que vamos utilizar 
const PORT = 3333;

// Importando o core module do nodejs path
const path = require("path");

// Inicializando o express
const app = express();

// Configurando o envio dos dados 
app.use(express.urlencoded({
    extended: true }));

app.use(express.json());

// Configurando o handlebars
app.set('views', path.join(__dirname, 'views'));
// Infrmando qual engenharia de template vai ser utilizada
app.engine('handlebars', exphbs.engine());
// Configurando que os arquivos não vão ser .htlm e sim .handlebars 
app.set('view engine', "handlebars");

// Configurando a utilização de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Importando o arquivo de rotas
const productRouter = require("./routers/productRouter");

// Utilizar a rota /product que se encontra no arquivo productRouter
app.use("/product", productRouter);

// Configurando o servidor
app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});
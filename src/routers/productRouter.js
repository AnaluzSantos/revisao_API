const express = require("express");
const router = express.Router();

// Importando o controller de Produtos 
const ProductController = require("../controllers/ProductController");

// Rota responsável pos listar todos os produtos 
router.get("/", ProductController.getAllProducts);

// Rota responsável por cadastrar os produtos
router.post("/add", ProductController.createProductPost);

// Rota responsável por buscar um produto em específico
router.get("/:id", ProductController.getProduct);

// Rota responsável por atualizar o produto
router.post("/update", ProductController.updateProduct);

// Rota responsável por remover um produto 
router.get("/remove/:id", ProductController.removeProduct);

//Exportando o módulo router 
module.exports = router; 

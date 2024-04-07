const express = require("express");
const authentication = require("../middleware/authentication");
const {
    getAllProductsByCategories,
  createNewProduct,
  updateProductById,
  hiddenProductById,
} = require("../controllers/Products");

const productsRouter = express.Router();

productsRouter.get('/categories/:CategorieId',getAllProductsByCategories)
productsRouter.post('/newProduct',authentication,createNewProduct)
productsRouter.put('/:ProductId',authentication,updateProductById)
productsRouter.put("/hidden/:productId", authentication, hiddenProductById)

module.exports = productsRouter;

const express = require("express");
const {
    createNewCategories,getAllCategories
} = require("../controllers/Categories");

const postsRouter = express.Router();

postsRouter.post('/',createNewCategories)
postsRouter.get('/',getAllCategories)

module.exports = postsRouter;

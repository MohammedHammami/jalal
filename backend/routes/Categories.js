const express = require("express");
const {
    createNewCategories,
} = require("../controllers/Categories");

const postsRouter = express.Router();

postsRouter.post('/',createNewCategories)

module.exports = postsRouter;

const express = require("express");
const authentication=require('../middleware/authentication')
const {
    createNewCategories,getAllCategories
} = require("../controllers/Categories");

const postsRouter = express.Router();

postsRouter.post('/',authentication,createNewCategories)
postsRouter.get('/',getAllCategories)

module.exports = postsRouter;

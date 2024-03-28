const express = require("express");
const {
    getAllPostsByCategories,
    createNewPost,
    updatePostById,
    hiddenPostById,
} = require("../controllers/posts");

const postsRouter = express.Router();

postsRouter.post('/categories/:id',getAllPostsByCategories)
postsRouter.post('/newPost',createNewPost)
postsRouter.put('/update/:postId',updatePostById)
postsRouter.put("/hidden/:id",  hiddenPostById)

module.exports = postsRouter;

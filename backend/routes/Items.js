const express = require("express");
const {
    createNewItem,getAllItemByOrderId,getItemBYId
} = require("../controllers/Item");

const itemRouter = express.Router();

itemRouter.post('/',createNewItem)
itemRouter.get('/orderId',getAllItemByOrderId)
itemRouter.get('/:ItemId',getItemBYId)

module.exports = itemRouter;

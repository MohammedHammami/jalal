const pool = require("../models/db");


   
const createNewItem = (req, res) => {
  const [Quantity, Description, OrderID, ProductID, Color] = req.body;
  pool
    .query(
      `INSERT INTO Items (Quantity, Description, OrderID, ProductID, Color) VALUES ($1,$2,$3,$4,$5);`
      [Quantity, Description, OrderID, ProductID, Color]
    )
    .then((result) => {
      res.status(200).json({
        success: true,
        mesasge: "Item created",
        Item: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    });
};
const getAllItemByOrderId = (req, res) => {
  const orderID  = req.params.orderID;
  pool
  .query(`SELECT * FROM Item WHERE OrderID = ${orderID}`)
  .then((result) => {
      res.status(200).json({
        success: true,
        mesasge: "get all Item by order id",
        Productss: result.rows,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    });
};
const getItemBYId = (req, res) => {
    const ItemId  = req.params.ItemId;
    pool
    .query(`SELECT * FROM Item WHERE ItemID = ${ItemId}`)
    .then((result) => {
        res.status(200).json({
          success: true,
          mesasge: "get Item by id",
          Productss: result.rows,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "Server Error",
          err: err.message,
        });
      });
  };

module.exports = {
    createNewItem,
    getAllItemByOrderId,
    getItemBYId
};

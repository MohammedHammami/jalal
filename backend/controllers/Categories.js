const pool = require("../models/db");

const createNewCategories = (req, res) => {
  
  const {CategoryName,Description} = req.body;

  pool
    .query(
    //   `INSERT INTO posts (title, description, user_id, pricing,post_image) VALUES ($1,$2,$3,$4,$5) RETURNING *`,
      `INSERT INTO Categories (CategoryName, Description) VALUES ($1,$2);`,
      [CategoryName, Description,]
    )
    .then((result) => {
      res.status(200).json({
        success: true,
        mesasge: "Category created",
        post: result.rows,
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
const getAllCategories = (req,res) => {
  pool
  .query(`SELECT * FROM categories`)
  .then((result) => {
      res.status(200).json({
        success: true,
        mesasge: "all categories",
        posts: result.rows
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    });
}



  

module.exports = {
    createNewCategories,
    getAllCategories
};

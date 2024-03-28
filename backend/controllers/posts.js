const pool = require("../models/db");


   
const createNewPost = (req, res) => {
  const [ProductName, Description, Price, ImagePath, CategoryID] = req.body;
  pool
    .query(
      `INSERT INTO Products (ProductName, Description, Price, ImagePath, CategoryID) VALUES ($1,$2,$3,$4,$5);`
      [ProductName, Description, Price, ImagePath, CategoryID]
    )
    .then((result) => {
      res.status(200).json({
        success: true,
        mesasge: "post created",
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

const updatePostById = (req, res) => {
  const id = req.params.productID;
  const { ProductName, Description, Price } = req.body;
  const data = [ProductName, Description, Price, CategoryID, id];
  const query = `UPDATE Products SET ProductName = COALESCE($1, ProductName), Description = COALESCE($2, Description), Price = COALESCE($3, Price), CategoryID = COALESCE($4, CategoryID) WHERE ProductID = $5 RETURNING *;`;

  pool
    .query(query, data)
    .then((result) => {
      if (result.rows.length > 0) {
        // إذا تم التحديث بنجاح
        res.status(200).json({
          success: true,
          message: "Product updated",
          product: result.rows[0], // إرجاع المنتج المُحدث
        });
      } else {
        // إذا لم يتم العثور على المنتج بالمعرف المحدد
        res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server Error",
        err: err.message,
      });
    });

};

const getAllPostsByCategories = (req, res) => {
  const categoryID  = req.params.id;
  pool
  .query(`SELECT * FROM Products WHERE CategoryID = ${categoryID} AND IsActive = true`)
  .then((result) => {
      res.status(200).json({
        success: true,
        mesasge: "get all Products from one Category",
        posts: result.rows,
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


const hiddenPostById = (req, res) => {
  const id = req.params.productID;
  // لا حاجة لقراءة القيم الأخرى من الجسم إذا كنا سنغير فقط IsActive
  const query = `UPDATE Products SET IsActive = false WHERE ProductID = $1 RETURNING *;`;

  pool
    .query(query, [id])
    .then((result) => {
      if (result.rows.length > 0) {
        // إذا تم التحديث بنجاح
        res.status(200).json({
          success: true,
          message: "Product updated to inactive",
          product: result.rows[0], // إرجاع المنتج المُحدث
        });
      } else {
        // إذا لم يتم العثور على المنتج بالمعرف المحدد
        res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }
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
  getAllPostsByCategories,
  createNewPost,
  updatePostById,
  hiddenPostById,
};

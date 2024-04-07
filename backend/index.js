const express = require("express");
const cors = require("cors");
require('dotenv').config();
require('./models/db')

const app = express();
const PORT = process.env.PORT || 5000;

const postsRouter = require("./routes/posts");
const categoriesRouter = require("./routes/Categories");
const ColorRouter = require("./routes/Color");
const OrderRouter = require("./routes/Orders");
const ItemRouter = require("./routes/Orders");

app.use(cors());
app.use(express.json());



app.use("/posts", postsRouter);
app.use("/categories", categoriesRouter);
app.use("/color", ColorRouter);
app.use("/order", OrderRouter);
app.use("/item", ItemRouter);

// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});


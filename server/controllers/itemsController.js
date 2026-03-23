const { json } = require("express");
const Item = require("../models/itemsModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

/* GET request handler */
const getItem = async (req, res) => {
  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;
  try {
    const token = req.header(tokenHeaderKey);

    const verified = jwt.verify(token, jwtSecretKey);
    if (verified) {
      const items = await Item.find();
      console.log("Get Items on " + Date());
      res.json(items);
    } else {
      // Access Denied
      return res.status(401).send(error);
    }
  } catch (error) {
    // Access Denied
    return res.status(401).send(error);
  }
  //   console.log(req);
};

/* POST Request handler */
const addItem = async (req, res) => {
  const highlights = req.body.highlights.split(",");
  const size = req.body.size.split(",");

  /* The request.body must have all these values */
  const item = {
    name: req.body.name,
    category: req.body.category,
    type: req.body.type,
    color: req.body.color,
    description: req.body.description,
    price: req.body.price,
    image: req.files,
    size: size,
    highlights: highlights,
    detail: req.body.detail,
  };

  if (item) {
    await Item.create(item).then(() => {
      res.status(201).json({ message: "Items Add Success" });
    });

    // res.redirect("/shop");
  } else {
    res.status(400).json({ message: "Unable to add item" });
  }
};

/* PUT Request handler */
const updateItem = async (req, res) => {
  console.log(req.body);
  const highlights = req.body.highlights.split(",");
  const size = req.body.size.split(",");

  /* The request.body must have all these values */
  const item = {
    name: req.body.name,
    category: req.body.category,
    type: req.body.type,
    color: req.body.color,
    description: req.body.description,
    price: req.body.price,
    image: req.files,
    size: size,
    highlights: highlights,
    detail: req.body.detail,
  };

  if (item) {
    await Item.updateOne({ _id: req.query.id }, item);
    res.status(201).json({ message: "Items Update Success" });
    // res.redirect("/shop");
  } else {
    res.status(400).json({ message: "Unable to Update item" });
  }
};

/* DELETE Request handler */
const deleteItem = (req, res) => {
  res.json({ message: "delete Item" });
};

const getItemsByCategory = async (req, res) => {
  console.log(req.query);
  const items = await Item.find({ category: req.query.category });
  res.json(items);
};

module.exports = {
  getItem,
  addItem,
  updateItem,
  deleteItem,
  getItemsByCategory,
};

const express = require("express");
const router = express.Router();
const cors = require("cors");
const uploadPhoto = require("../middlewares/upload");
const generateJWT = require("../middlewares/jwt");
const {
  getItem,
  addItem,
  updateItem,
  deleteItem,
  getItemsByCategory,
} = require("../controllers/itemsController");

router.get("/generateToken", generateJWT);

router.get("/", cors(), getItem);

router.get("/category", getItemsByCategory);

/* The post request must have a body elemnt with name images */
router.put("/", uploadPhoto.array("images"), addItem);

router.post("/", updateItem);

router.delete("/:id", deleteItem);

module.exports = router;

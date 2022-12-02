const router = require("express").Router();

const {
  createProduct,
  deleteProductById,
  getProductById,
  getProduct,
  updateProductById,
} = require('../controllers/product-controller')

router.get("/", getProduct);
router.get("/:id", getProductById);
router.post("/saveProduct", createProduct);
router.delete("/deleteProduct/:id", deleteProductById);
router.put("/updateProduct/:id", updateProductById);

module.exports = router;

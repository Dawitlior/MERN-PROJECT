const router = require("express").Router();
const {
  createCategory,
  deleteCategoryById,
  getCategories,
  getCategoryById,
  updateCategoryById,
} = require("../controllers/categories-controller");

router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.post("/saveCategory", createCategory);
router.put("/updateCategory/:id", updateCategoryById);
router.delete("/deleteCategory/:id", deleteCategoryById);

module.exports = router;

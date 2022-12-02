const router = require("express").Router();
const {
  createDepartment,
  deleteDepartmentById,
  getDepartment,
  getDepartmentById,
  updateDepartmentById,
} = require("../controllers/department-controller");

router.get("/", getDepartment);
router.get("/:id", getDepartmentById);
router.post("/saveDepartment", createDepartment);
router.put("/updateDepartment/:id", updateDepartmentById);
router.delete("/deleteDepartment/:id", deleteDepartmentById);

module.exports = router;
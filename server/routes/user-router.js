const router = require("express").Router();

const {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} = require("../controllers/user-controller");


router.get("/",getUsers);
router.get("/byId/:id",getUserById);
router.post("/saveData",createUser);
router.put("/update/:id",updateUser);
router.delete("/delete/:id",deleteUser);

module.exports = router;
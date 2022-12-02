const router = require("express").Router();
const {
  createStore,
  deleteStoreById,
  getStore,
  getStoreById,
  updateStoreById,
} = require("../controllers/stores-controller");

router.get("/", getStore);
router.get("/:id", getStoreById);
router.post("/saveStore", createStore);
router.delete("/deleteStore/:id", deleteStoreById);
router.put("/updateStore/:id", updateStoreById);

module.exports = router;

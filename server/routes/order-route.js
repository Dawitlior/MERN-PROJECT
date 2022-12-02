const router = require("express").Router();

const {
  createOrder,
  deleteOrderById,
  getOrderById,
  getOrders,
  updateOrderById,
} = require("../controllers/order-controller");

router.get("/", getOrders);
router.get("/:id", getOrderById);
router.post("/saveOrder", createOrder);
router.delete("/deleteOrder/:id", deleteOrderById);
router.put("/updateOrder/:id", updateOrderById);

module.exports = router;

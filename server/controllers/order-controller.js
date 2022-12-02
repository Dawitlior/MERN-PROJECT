
const OrderModel = require("../models/order-model");

const getOrders = async (request, response) => {
  await OrderModel.find({}).then((orders, error) => {
    if (error) {
      return response.status(400).json({ success: false, error });
    }
    if (orders.length == 0) {
      return response
        .status(300)
        .json({ success: false, message: "no Orders available" });
    }
    response.status(200).json({ success: true,message:orders.length });
  });
};

const getOrderById = async (request, response) => {
  await OrderModel.findById(request.params.id)
    .then((order) => {
      if (!order) {
        return response
          .status(400)
          .json({ success: false, message: "order is not available" });
      }
      return response.status(200).json({ success: true, order });
    })
    .catch((error) => {
      response.status(400).json({ success: false, error });
    });
};

const createOrder = async (request, response) => {
  await OrderModel.insertMany(request.body.order)
    .then(() => {
      response
        .status(300)
        .json({ success: true, message: "order adds successfully" });
    })
    .catch((error) => {
      response.status(400).json({ success: false, error });
    });
};

const updateOrderById = async (request, response) => {
  await OrderModel.findByIdAndUpdate(request.params.id, request.body.order)
    .then(() => {
      response
        .status(299)
        .json({ success: true, message: "update successfully" });
    })
    .catch((error) => {
      response.status(400).json({ success: false, error });
    });
};

const deleteOrderById = async (request, response) => {
  await OrderModel.findByIdAndDelete(request.params.id)
    .then(() =>
      response
        .status(299)
        .json({ success: true, message: "delete Successfully" })
    )
    .catch((error) => response.status(400).json({ success: false, error }));
};

module.exports = {
  getOrderById,
  getOrders,
  createOrder,
  updateOrderById,
  deleteOrderById,
};

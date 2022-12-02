const StoresModel = require('../models/stores-model');

const getStore = async (request, response) => {
  await StoresModel.find({})
  .then((store, error) => {
    if (error) {
      return response.status(400).json({ success: false, error });
    }
    if (store.length == 0) {
      return response
        .status(300)
        .json({ success: false, message: "no Stores available" });
    }
    response.status(200).json({ success: true, message: store.length });
  });
};

const getStoreById = async (request, response) => {
  await StoresModel.findById(request.params.id)
    .then((store) => {
      if (!store) {
        return response
          .status(400)
          .json({ success: false, message: "Store is not available" });
      }
      return response.status(200).json({ success: true, store });
    })
    .catch((error) => {
      response.status(400).json({ success: false, message: error.message });
    });
};

const createStore = async (request, response) => {
  await StoresModel.insertMany(request.body.store)
    .then(() => {
      response
        .status(300)
        .json({ success: true, message: "Store adds successfully" });
    })
    .catch((error) => {
      response.status(400).json({ success: false, message: error.message });
    });
};

const updateStoreById = async (request, response) => {
  await StoresModel.findByIdAndUpdate(request.params.id, request.body.store)
    .then(() => {
      response
        .status(299)
        .json({ success: true, message: "Store update successfully" });
    })
    .catch((error) => {
      response.status(400).json({ success: false, message: error.message });
    });
};

const deleteStoreById = async (request, response) => {
  await StoresModel.findByIdAndDelete(request.params.id)
    .then(() =>
      response
        .status(299)
        .json({ success: true, message: "Store delete Successfully" })
    )
    .catch((error) => response.status(400).json({ success: false, message:error.message }));
};

module.exports = {
  getStore,
  getStoreById,
  createStore,
  updateStoreById,
  deleteStoreById
};
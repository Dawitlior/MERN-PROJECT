const ProductModel = require("../models/product-model");

const getProduct = async (request, response) => {
  await ProductModel.find({}).then((product, error) => {
    if (error) {
      return response.status(400).json({ success: false, error });
    }
    if (product.length == 0) {
      return response
        .status(300)
        .json({ success: false, message: "no Products available" });
    }
    response.status(200).json({ success: true, message: product.length });
  });
};

const getProductById = async (request, response) => {
  await ProductModel.findById(request.params.id)
    .then((product) => {
      if (!product) {
        return response
          .status(400)
          .json({ success: false, message: "product is not available" });
      }
      return response.status(200).json({ success: true, product });
    })
    .catch((error) => {
      response.status(400).json({ success: false, error });
    });
};

const createProduct = async (request, response) => {
  await ProductModel.insertMany(request.body.product)
    .then(() => {
      response
        .status(300)
        .json({ success: true, message: "product adds successfully" });
    })
    .catch((error) => {
      response.status(400).json({ success: false, error });
    });
};

const updateProductById = async (request, response) => {
  await ProductModel.findByIdAndUpdate(request.params.id, request.body.product)
    .then(() => {
      response
        .status(299)
        .json({ success: true, message: "Product update successfully" });
    })
    .catch((error) => {
      response.status(400).json({ success: false, error });
    });
};

const deleteProductById = async (request, response) => {
  await ProductModel.findByIdAndDelete(request.params.id)
    .then(() =>
      response
        .status(299)
        .json({ success: true, message: "Product delete Successfully" })
    )
    .catch((error) => response.status(400).json({ success: false, error }));
};

module.exports = {
  createProduct,
  deleteProductById,
  getProductById,
  getProduct,
  updateProductById,
};

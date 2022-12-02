const CategoriesModel = require("../models/categories-model");

const getCategories = async (request, response) => {
  await CategoriesModel.find({}).then((categories, error) => {
    if (error) {
      return response.status(400).json({ success: false, message: error });
    }
    if (categories.length == 0) {
      return response
        .status(299)
        .json({ success: true, message: "There is no categories available" });
    }
    response
      .status(200)
      .json({ success: true, message: categories.length && categories });
  });
};

const getCategoryById = async (request, response) => {
  await CategoriesModel.findById(request.params.id)
    .then((category) => {
      if (!category) {
        return response
          .status(400)
          .json({ success: false, message: "category is not available" });
      }
      return response.status(200).json({ success: true, category });
    })
    .catch((error) => {
      response.status(400).json({ success: false, error });
    });
};

const createCategory = async (request, response) => {
  await CategoriesModel.insertMany(request.body.category)
    .then(() => {
      response
        .status(300)
        .json({ success: true, message: "category adds successfully" });
    })
    .catch((error) => {
      response.status(400).json({ success: false, error });
    });
};

const updateCategoryById = async (request, response) => {
  await CategoriesModel.findByIdAndUpdate(
    request.params.id,
    request.body.category
  )
    .then(() => {
      response
        .status(299)
        .json({ success: true, message: "category update successfully" });
    })
    .catch((error) => {
      response.status(400).json({ success: false, error });
    });
};

const deleteCategoryById = async (request, response) => {
  await CategoriesModel.findByIdAndDelete(request.params.id)
    .then(() => {
      response
        .status(200)
        .json({ success: true, message: "category deleted successfully" });
    })
    .catch((error) => response.status(400).json({ success: false, error }));
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategoryById,
  deleteCategoryById,
};

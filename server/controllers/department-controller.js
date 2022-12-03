const DepartmentModel = require("../models/department-model");

const getDepartment = async (request, response) => {
  await DepartmentModel.find({}).then((departments, error) => {
    if (error) {
      return response.status(400).json({ success: false, error });
    }
    if (departments.length == 0) {
      return response
        .status(300)
        .json({
          success: true,
          message: "Sorry, there is no departments available",
        });
    }
    response.status(200).json({success:true,departments});
  });
};

const getDepartmentById = async (request, response) => {
  await DepartmentModel.findById(request.params.id)
    .then((department) => {
      if (!department) {
        return response
          .status(400)
          .json({ success: false, message: "department is not available" });
      }
      return response.status(200).json({ success: true, department });
    })
    .catch((error) => {
      response.status(400).json({ success: false, error });
    });
};

const createDepartment = async (request, response) => {
  await DepartmentModel.insertMany(request.body.department)
    .then(() => {
      response
        .status(300)
        .json({ success: true, message: "department adds successfully" });
    })
    .catch((error) => {
      response.status(400).json({ success: false, error });
    });
};
const updateDepartmentById = async (request, response) => {
  await DepartmentModel.findByIdAndUpdate(
    request.params.id,
    request.body.department
  )
    .then(() => {
      response
        .status(299)
        .json({ success: true, message: "department update successfully" });
    })
    .catch((error) => {
      response.status(400).json({ success: false, error });
    });
};

const deleteDepartmentById = async (request, response) => {
  await DepartmentModel.findByIdAndDelete(request.params.id)
    .then(() => {
      response
        .status(200)
        .json({ success: true, message: "department deleted successfully" });
    })
    .catch((error) => response.status(400).json({ success: false, error }));
};

module.exports = {
  getDepartment,
  getDepartmentById,
  createDepartment,
  updateDepartmentById,
  deleteDepartmentById,
};

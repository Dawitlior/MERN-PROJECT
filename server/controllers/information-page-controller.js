const InformationPageModel = require("../models/information-page-model");

const getInformationPages = async (request, response) => {
  await InformationPageModel.find({}).then((infoPages, error) => {
    if (error) {
      return response.status(400).json({ success: false, message: error });
    }
    if (infoPages.length == 0) {
      return response.status(300).json({
        success: true,
        message: "Sorry, There is no information pages available",
      });
    }
    response.status(200).json({ success: true, message: infoPages.length });
  });
};

const getInformationPageById = async (request, response) => {
  await InformationPageModel.findById(request.params.id)
    .then((infoPage) => {
      if (!infoPage) {
        return response
          .status(300)
          .json({ success: false, message: "No info page available" });
      }
      return response.status(200).json({ success: true, message: infoPage });
    })
    .catch((error) =>
      response.status(400).json({ success: false, message: error })
    );
};

const createInformationPage = async (request, response) => {
  await InformationPageModel.insertMany(request.body.informationPage)
    .then(() => {
      response
        .status(300)
        .json({ success: true, message: "information page adds successfully" });
    })
    .catch((error) => {
      response.status(400).json({ success: false, error });
    });
};

const updateInformationPageById = async (request, response) => {
  await InformationPageModel.findByIdAndUpdate(
    request.params.id,
    request.body.informationPage
  )
    .then(() => {
      response.status(299).json({
        success: true,
        message: "information page update successfully",
      });
    })
    .catch((error) => {
      response.status(400).json({ success: false, error });
    });
};

const deleteInformationPageById = async (request, response) => {
  await InformationPageModel.findByIdAndDelete(request.params.id)
    .then(() =>
      response.status(299).json({
        success: true,
        message: "information page delete Successfully",
      })
    )
    .catch((error) => response.status(400).json({ success: false, error }));
};

module.exports = {
  getInformationPageById,
  getInformationPages,
  createInformationPage,
  updateInformationPageById,
  deleteInformationPageById,
};

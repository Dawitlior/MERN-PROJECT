const router = require("express").Router();
const {
  createInformationPage,
  deleteInformationPageById,
  getInformationPageById,
  getInformationPages,
  updateInformationPageById,
} = require("../controllers/information-page-controller");

router.get("/", getInformationPages);
router.get("/:id", getInformationPageById);
router.post("/saveInformationPage", createInformationPage);
router.put("/updateInformationPage/:id", updateInformationPageById);
router.delete("/deleteInformationPage/:id", deleteInformationPageById);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
    createGuide,
    deleteGuide,
    getGuideById,
    getGuide,
    updateGuide
} = require("../controller/guide.controller");

//@route  POST api/Guide Package
//@desc   add Guide Package record
router.post("/add", createGuide);

//@route  GET api/Guide Package
//@desc   get Guide Package by Id
router.get("/:id", getGuideById);

//@route  DELETE api/Guide Package
//@desc   delete Guide Package
router.delete("/:id", deleteGuide);

//@route  GET api/Guide Package/all
//@desc   get all Guide Package
router.get("/", getGuide);

//@route  PUT api/Guide Package
//@desc   update Guide Package record
router.put("/:id", updateGuide);

module.exports = router;
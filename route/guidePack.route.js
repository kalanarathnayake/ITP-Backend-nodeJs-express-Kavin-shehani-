const express = require("express");
const router = express.Router();

const {
    createGuidePack,
    deleteGuidePack,
    getGuidePackById,
    getGuidePack,
    updateGuidePack,
} = require("../controller/guidePack.controller");

//@route  POST api/Guide Package
//@desc   add Guide Package record
router.post("/add", createGuidePack);

//@route  GET api/Guide Package
//@desc   get Guide Package by Id
router.get("/:id", getGuidePackById);

//@route  DELETE api/Guide Package
//@desc   delete Guide Package
router.delete("/:id", deleteGuidePack);

//@route  GET api/Guide Package/all
//@desc   get all Guide Package
router.get("/", getGuidePack);

//@route  PUT api/Guide Package
//@desc   update Guide Package record
router.put("/:id", updateGuidePack);

module.exports = router;
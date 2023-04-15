const express = require("express");
const router = express.Router();

const {
    createTour,
    deletetour,
    getTourById,
    getTour,
    updateTour,
} = require("../controller/Tour.controller");

//@route  POST api/tour Package
//@desc   add tour Package record
router.post("/add", createTour);

//@route  GET api/tour Package
//@desc   get tour Package by Id
router.get("/:id", getTourById);

//@route  DELETE api/tour Package
//@desc   delete tour Package
router.delete("/:id", deletetour);

//@route  GET api/tour Package/all
//@desc   get all tour Package
router.get("/", getTour);

//@route  PUT api/tour Package
//@desc   update tour Package record
router.put("/:id", updateTour);

module.exports = router;


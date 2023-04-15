const express = require("express");
const router = express.Router();

const {
    createInquiry,
    deleteInquiry,
    getInquiryById,
    getInquiry,
    updateInquiry,
} = require("../controller/Inquiry.controller");

//@route  POST api/Inquiry
//@desc   add Inquiry record
router.post("/add", createInquiry);

//@route  GET api/Inquiry
//@desc   get Inquiry by Id
router.get("/:id", getInquiryById);

//@route  DELETE api/Inquiry
//@desc   delete Inquiry
router.delete("/:id", deleteInquiry);

//@route  GET api/Inquiry/all
//@desc   get all Inquiry
router.get("/", getInquiry);

//@route  PUT api/Inquiry
//@desc   update Inquiry record
router.put("/:id", updateInquiry);

module.exports = router;
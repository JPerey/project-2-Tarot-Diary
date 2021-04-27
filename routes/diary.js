const express = require("express");
const router = express.Router();
const diaryCtrl = require("../controllers/diary");

router.get("/diary", diaryCtrl.index);
//router.get("/:id", calendarCtrl.show);

module.exports = router;
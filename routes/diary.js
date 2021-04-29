const express = require("express");
const router = express.Router();
const diaryCtrl = require("../controllers/diary");

router.get("/", diaryCtrl.index);
router.get("/:id", diaryCtrl.show);
router.delete("/:id", diaryCtrl.deleteTarot);
//router.get("/:id", calendarCtrl.show);

module.exports = router;
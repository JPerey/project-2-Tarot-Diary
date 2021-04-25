const express = require("express");
const router = express.Router();
const calendarCtrl = require("../controllers/calendar");

router.get("/calendar", calendarCtrl.index);
//router.get("/calendar/:id", calendarCtrl.show);

module.exports = router;
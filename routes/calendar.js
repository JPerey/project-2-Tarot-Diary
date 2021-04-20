const express = require("express");
const router = express.Router();
const calendarCtrl = require("../controllers/calendar");

router.get("/calendar", calendarCtrl.index);

module.exports = router;
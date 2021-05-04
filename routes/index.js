const express = require("express");
const router = express.Router();
const indexCtrl = require("../controllers/index");

router.get("/", indexCtrl.index);
router.get("/info", indexCtrl.info);

module.exports = router;
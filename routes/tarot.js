const express = require("express");
const router = express.Router();
const tarotCtrl = require("../controllers/tarot");

router.get("/new1", tarotCtrl.new1);
router.get("/new3", tarotCtrl.new3);
router.get("/new4", tarotCtrl.new4);
router.post("/", tarotCtrl.create);
//router.post("/", tarotCtrl.create);

module.exports = router;
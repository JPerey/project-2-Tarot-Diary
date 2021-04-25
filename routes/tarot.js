const express = require("express");
const router = express.Router();
const tarotCtrl = require("../controllers/tarot");

router.get("/tarot1", tarotCtrl.index1);
router.get("/tarot3", tarotCtrl.index3);
router.get("/tarot4", tarotCtrl.index4);

module.exports = router;
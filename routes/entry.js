const express = require("express");
const router = express.Router();
const entryCtrl = require("../controllers/entries");

router.post("/tarot/:id/entries", entryCtrl.create);

module.exports = router;
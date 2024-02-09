var express = require('express');
var router = express.Router();
const oraiController = require("../controllers/Orai")

router.get('/', oraiController.test)

module.exports = router;
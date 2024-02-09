var express = require('express');
var router = express.Router();
const oraiController = require("../controllers/Orai")

router.get('/', oraiController.test)
router.get('/miestas/:id',oraiController.show)
module.exports = router;
var express = require('express');
var router = express.Router();

router.use('/v1.0', require('./v1.0'));
router.use('/v2.0', require('./v2.0'));

module.exports = router;
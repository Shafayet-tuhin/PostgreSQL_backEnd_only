const express = require('express');
const { getfood } = require('../Controller/foodController');
const router = express.Router();

router.get('/' , getfood )

module.exports = router 
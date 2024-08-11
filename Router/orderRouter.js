const express = require('express');
const { getOrder, getSpeceficPersonOrder, giveOrder } = require('../Controller/orderController');
const router = express.Router();

router.get('/' , getOrder)
router.get('/:id' , getSpeceficPersonOrder)
router.post('/' , giveOrder)

module.exports = router;
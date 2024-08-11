const express = require('express');
const { getUsers, postUsers, deleteUser, getSpecificUser, updateUser } = require('../Controller/userController');
const router = express.Router();

router.get('/', getUsers)
router.get('/:id', getSpecificUser)
router.post('/', postUsers)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)

module.exports = router;
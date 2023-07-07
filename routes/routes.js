const express = require('express');
const userController = require('../controllers/users')
const router = express.Router()

router.route('/users')
    .get(userController.findAll)
    .post(userController.store)

router.route('/users/:id')
    .get(userController.find)
    .put(userController.update)
    .delete(userController.remove)

module.exports = router
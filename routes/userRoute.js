const express = require('express');

const { userController } = require('../controllers/userController');
const {
  userValidation,
} = require('../middlewares/validators/userValidator');

const router = express.Router();

router.post('/', userValidation, userController.create);

module.exports = router;

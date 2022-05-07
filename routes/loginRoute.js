const express = require('express');

const { loginController } = require('../controllers/loginController');
const { loginValidation } = require('../middlewares/validators/loginValidator');

const router = express.Router();

router.post('/', loginValidation, loginController.login);

module.exports = router;

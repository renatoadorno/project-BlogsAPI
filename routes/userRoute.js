const express = require('express');

const { userController } = require('../controllers/userController');
const { userValidation } = require('../middlewares/validators/userValidator');
const { auth } = require('../middlewares/auth');

const router = express.Router();

// Criar usuario
router.post('/', userValidation, userController.create);

// Autoriza usuario (verifica token);
router.use(auth);

// Retorna todos os usuarios
router.get('/', userController.findAll);

module.exports = router;

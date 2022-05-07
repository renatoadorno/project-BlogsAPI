const express = require('express');

const { categoryController } = require('../controllers/categoryController');
const { createdCategoryValidation } = require('../middlewares/validators/categoryValidator');
const { auth } = require('../middlewares/auth');

const router = express.Router();

// Autoriza usuario (verifica token);
router.use(auth);

// Criar categoria
router.post('/', createdCategoryValidation, categoryController.create);

// Mostra todas as categorias
router.get('/', categoryController.findAll);

module.exports = router;

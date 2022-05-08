const express = require('express');

const { postController } = require('../controllers/postController');
const { postValidation } = require('../middlewares/validators/postValidator');
const { auth } = require('../middlewares/auth');

const router = express.Router();

// Autoriza usuario (verifica token);
router.use(auth);

// Criar post
router.post('/', postValidation, postController.create);

// Mostra todos os posts

module.exports = router;

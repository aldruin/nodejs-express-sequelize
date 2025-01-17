const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const pessoaController = new PessoaController();

//instanciando router (express)
const router = Router();

router.get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res));

//commonJS export
module.exports = router;

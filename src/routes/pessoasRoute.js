const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');
const MatriculaController = require('../controllers/MatriculaController.js');


const pessoaController = new PessoaController();
const matriculaController = new MatriculaController();

//instanciando router (express)
const router = Router();

//criando rotas e associando ao controller
router.get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res));
router.get('/pessoas/:id', (req, res) => pessoaController.pegaUmPorId(req, res));
router.post('/pessoas', (req, res) => pessoaController.criaNovo(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.atualiza(req, res));
router.delete('/pessoas/:id', (req, res) => pessoaController.exclui(req, res));
// \/ implementa rota para criação de matriculas, pois de acordo com a regra de negócio, é a partir do estudanteId que se cria, sendo acessado através da rota 'pessoas'
router.post('/pessoas/:estudanteId/matriculas', (req, res) => matriculaController.criaNovo(req, res));






//commonJS export
module.exports = router;

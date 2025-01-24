const { Router } = require('express');
const CursoController = require('../controllers/CursoController.js');

const cursoController = new CursoController();

//instanciando router (express)
const router = Router();

//criando rotas e associando ao controller
router.get('/cursos', (req, res) => cursoController.pegaTodos(req, res));
router.get('/cursos/:id', (req, res) => cursoController.pegaUmPorId(req, res));
router.post('/cursos', (req, res) => cursoController.criaNovo(req, res));
router.put('/cursos/:id', (req, res) => cursoController.atualiza(req, res));
router.delete('/cursos/:id', (req, res) => cursoController.exclui(req, res));

//commonJS export
module.exports = router;

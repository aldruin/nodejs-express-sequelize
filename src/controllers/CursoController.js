const Controller = require('./Controller.js');
const CursoService = require('../services/CursoServices.js');

const cursoServices = new CursoService();

class CursoController extends Controller {
  constructor() {
    super(cursoServices);
  }
}

//commonJS export
module.exports = CursoController;
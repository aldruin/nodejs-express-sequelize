const dataSource = require('../models');

//classe
class Services {
  //construtor
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  //método
  async pegaTodosOsRegistros() {
    return dataSource[this.model].findAll();
  }
}

//export
module.exports = Services;
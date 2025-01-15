/* eslint-disable no-unused-vars */

const express = require('express');
const pessoas = require('./pessoasRoute.js');
//index de router (ponto de entrada das rotas), como um 'middleware' de rotas, será enviada para o express
//instancia de express com tudo que será usado pelas rotas, para ser consumido pelo app.js


module.exports = app => {
  app.use(
    express.json(),
    pessoas,
  );
};

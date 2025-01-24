/* eslint-disable no-unused-vars */

const express = require('express');
const pessoas = require('./pessoasRoute.js');
const categorias = require('./categoriasRoute.js');
const cursos = require('./cursosRoute.js');
//index de router (ponto de entrada das rotas), como um 'middleware' de rotas, será enviada para o express
//instancia de express com tudo que será usado pelas rotas, para ser consumido pelo app.js


module.exports = app => {
  app.use(
    express.json(),
    pessoas,
    categorias,
    cursos
  );
};

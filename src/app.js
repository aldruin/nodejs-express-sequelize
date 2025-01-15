/* eslint-disable no-unused-vars */
//uso de commonJS para import/export, pois algumas funções do ORM Sequelize funcionam melhor no commonjs, 
//também para ter uma paridade com a documentação do sequelize

const express = require('express');
const routes = require('./routes'); //passando a pasta routes, pois pega o arquivo index.js automaticamente

const app = express();
routes(app);

module.exports = app;

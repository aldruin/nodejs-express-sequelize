//uso de commonJS para import/export, pois algumas funções do ORM Sequelize funcionam melhor no commonjs, 
//também para ter uma paridade com a documentação do sequelize

const express = require('express');

const app = express();

app.use(express.json());

app.get('/teste', (req, res) => {
  res
    .status(200)
    .send({ mensagem: 'boas-vindas à API' });
});

module.exports = app;

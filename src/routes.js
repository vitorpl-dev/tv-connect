require('express-async-errors');
const { Router } = require('express');
const { sendEventController } = require('./controller');

const routes = Router();

routes.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
});

routes.post('/send', (req, res) => {
  return sendEventController.handle(req, res);
});

module.exports = { routes };

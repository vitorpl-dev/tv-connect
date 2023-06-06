const { socketProvider } = require('../handler/socket');
const { SendEventController } = require('./SendEventController');
const { SendEventUseCase } = require('./SendEventUseCase');

const sendEventUseCase = new SendEventUseCase(socketProvider);

const sendEventController = new SendEventController(sendEventUseCase);

module.exports = { sendEventUseCase, sendEventController };

class SendEventController {
  constructor(sendEventUseCase) {
    this.sendEventUseCase = sendEventUseCase;
  }

  async handle(req, res) {
    const { code, link } = req.body;

    const status = await this.sendEventUseCase.execute({
      code,
      data: link,
    });

    res.status(status ? 200 : 404).json({
      message: status ? 'Success' : 'Fail',
    });
  }
}

module.exports = { SendEventController };

class SendEventUseCase {
  constructor(socketProvider) {
    this.socketProvider = socketProvider;
  }

  async execute(data) {
    const status = await this.socketProvider.emitEvent({
      event: 'play',
      ...data,
    });

    return status;
  }
}

module.exports = { SendEventUseCase };

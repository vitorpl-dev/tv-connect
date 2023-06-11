class SocketProvider {
  constructor() {
    this.dataSocket = [];
  }

  async addSocket(props) {
    while (true) {
      const code = Math.floor(Math.random() * 90 + 10);

      const socketAlreadyExists = this.dataSocket.find(
        (socket) => socket.code == code
      );

      if (!socketAlreadyExists) {
        this.dataSocket.push({ code, socket: props.socket });
        return code;
      }
    }
  }

  async removeSocket(props) {
    const socketAlreadyExists = this.dataSocket.find(
      (socket) => socket.socket == props.socket
    );

    if (socketAlreadyExists) {
      this.dataSocket.slice(this.dataSocket.indexOf(socketAlreadyExists));
    }

    return !!socketAlreadyExists;
  }

  async emitEvent(props) {
    const socketAlreadyExists = this.dataSocket.find(
      (socket) => socket.code == props.code
    );

    if (socketAlreadyExists) {
      try {
        socketAlreadyExists.socket.emit(props.event, props.data);
      } catch (_) {
        return false;
      }
    }

    return !!socketAlreadyExists;
  }
}

module.exports = { SocketProvider };

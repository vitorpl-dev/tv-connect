const { socketProvider } = require('../handler/socket');

async function onSocket(client) {
  console.log(`New Client connect [${client.id}]`);
  const code = await socketProvider.addSocket({
    socket: client,
  });

  client.emit('code', code);

  client.on('disconnect', async () => {
    console.log(`Client Desconnected: [${client.id}]`);
    await socketProvider.removeSocket({
      socket: client,
    });
  });
}

module.exports = { onSocket };

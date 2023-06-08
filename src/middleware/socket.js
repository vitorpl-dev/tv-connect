const { socketProvider } = require('../handler/socket');

async function onSocket(client, req) {
  console.log(`New Client connect [${req.headers['sec-websocket-key']}]`);
  const code = await socketProvider.addSocket({
    socket: client,
  });

  client.send(JSON.stringify({ method: 'code', payload: code }));

  client.on('close', async () => {
    console.log(`Client desconnected [${req.headers['sec-websocket-key']}}]`);
    await socketProvider.removeSocket({
      socket: client,
    });
  });
}

module.exports = { onSocket };

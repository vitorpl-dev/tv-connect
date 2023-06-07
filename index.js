const express = require('express');
const http = require('http');
const socket = require('socket.io');
const { onError } = require('./src/middleware/error');
const { onSocket } = require('./src/middleware/socket');
const { routes } = require('./src/routes');

const app = express();
const server = http.createServer(app);
const io = new socket.Server(server);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use(routes);

io.on('connection', onSocket);

app.use(onError);

server.listen(3333, () => {
  console.log('Server running in port 3333!');
});

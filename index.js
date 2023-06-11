const express = require('express');
const http = require('http');
const cors = require('cors');
const socket = require('socket.io');
const { onError } = require('./src/middleware/error');
const { onSocket } = require('./src/middleware/socket');
const { routes } = require('./src/routes');

const app = express();
const server = http.createServer(app);
const io = new socket.Server(server, {
  path: '/socket',
  cors: {
    origin: '*',
  },
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use(routes);

io.on('connection', onSocket);

app.use(onError);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});

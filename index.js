const express = require('express');
const http = require('http');
const cors = require('cors');
const ws = require('ws');
const { onError } = require('./src/middleware/error');
const { onSocket } = require('./src/middleware/socket');
const { routes } = require('./src/routes');

const app = express();
const server = http.createServer(app);
const io = new ws.Server({ server, path: '/socket' });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use(routes);

io.on('connection', onSocket);

app.use(onError);

server.listen(8000, '0.0.0.0', () => {
  console.log('Server running in port 3333!');
});

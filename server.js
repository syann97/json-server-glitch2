// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({
  bodyParser: [
    bodyParser.json({
      limit: `100mb`,
      extended: false,
    }),
    bodyParser.urlencoded({
      extended: false,
    }),
  ],
});

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.patch('/items/:id/done', (req, res) => {
  const id = parseInt(req.params['id']);

  const todo = router.db.get('items').find({ id }).value();

  if (!todo) {
    return res.status(404).send();
  }

  todo.done = true;
  todo.finishedAt = Date.now();

  router.db.write();

  return res.json(todo);
})

server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }

  if (req.method === 'PATCH' && req.body.done === false) {
    req.body.finishedAt = undefined;
  }

  next();
});

// Use default router
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

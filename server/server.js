const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

server.patch('/items/:id/done', (req, res) => {
  const id = parseInt(req.params['id']);

  const value = router.db.get('items').find({ id }).assign({
    done: true,
    finishedAt: Date.now()
  }).value();

  return res.json(value);
})

server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  next();
});

// Use default router
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

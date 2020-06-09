import AppController from "./app";

const server = AppController();

try {
  server.middlewares();
  server.router();
} catch (error) {
  console.log("> [Server] Error");
  console.log(error);
}

server.app.listen(3333, () => console.log("> [Server] Started"));

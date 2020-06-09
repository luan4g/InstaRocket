import express from "express";
import RouterController from "./routes";

function AppController() {
  const app = express();
  const routes = RouterController;

  function middlewares() {
    app.use(express.json());
  }

  function router() {
    app.use(routes().routes);
  }

  return {
    app,
    middlewares,
    router,
  };
}

export default AppController;

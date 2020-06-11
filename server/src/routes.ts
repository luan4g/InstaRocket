import express from "express";

import UserController from "./controllers/UserController";

function RouterController() {
  const routes = express.Router();

  const userController = new UserController();

  routes.post("/create-user", userController.create);
  routes.get("/users", userController.index);
  routes.get("/user/:id", userController.show);

  return {
    routes,
  };
}

export default RouterController;

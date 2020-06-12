import express from "express";

import UserController from "./controllers/UserController";
import PostController from "./controllers/PostController";

function RouterController() {
  const routes = express.Router();

  const userController = new UserController();
  const postController = new PostController();

  routes.post("/create-user", userController.create);
  routes.get("/users", userController.index);
  routes.get("/user/:id", userController.show);

  routes.post("/new/:id/post", postController.create);
  routes.get("/list-posts", postController.index);
  routes.get("/post/:id", postController.show);

  return {
    routes,
  };
}

export default RouterController;

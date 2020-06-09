import express from "express";

function RouterController() {
  const routes = express.Router();

  routes.get("/", (req, res) => {
    res.send("hello planet");
  });

  return {
    routes,
  };
}

export default RouterController;

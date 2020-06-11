import express from "express";

function RouterController() {
  const routes = express.Router();

  routes.get("/", (req, res) => {
    res.json({ message: "Hello planet" });
  });

  return {
    routes,
  };
}

export default RouterController;

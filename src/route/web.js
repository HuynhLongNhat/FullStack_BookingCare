import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);

  router.get("/longnhat", (req, res) => {
    return res.send("Long Nhat dev Fullstack");
  });

  return app.use("/", router);
};

module.exports = initWebRoutes;

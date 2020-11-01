import express from "express";
import ProductController from "./controllers/ProductController.js";
const routes = express.Router();

routes.get("/index", ProductController.index);

export default routes;

import express from "express";
import ProductController from "./controllers/ProductController.js";
const routes = express.Router();

routes.get("/index", ProductController.index);
routes.post("/store/add", ProductController.store);
routes.get('/:id', ProductController.show);
routes.put('/update/:id', ProductController.update);
routes.delete('/destroy/:id', ProductController.destroy);

export default routes;

import express from "express";
import routes from "./routes.js"

const app = express();
const PORT = 3001;

app.use("/api", routes);

export { app, PORT };

import express from "express";
import routes from "./routes.js"
import cors from 'cors'

const app = express();
const PORT = 3001;

app.use(express.json())
app.use(cors())

app.use("/api", routes);

export { app, PORT };

import { app, PORT } from "./server.js";
import './mongoConn.js'


app.listen(PORT, () => {
  console.log(`API ativa na porta ${PORT}`);
});

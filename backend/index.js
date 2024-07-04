import express from 'express';
import router from './routes/router.js';
import cors from 'cors'

const app = express();

const port = 3000;

//Middleware
app.use(express.json());

app.use(cors());

//Rutas
app.use("/", router);

//Levantar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
})

import express from 'express';
import bodyParser from 'body-parser';
import router from "./router.js";
// import cors from "cors"

const app = express();
const port = 3000;

app.use(express.json());
// app.use(cors())
app.use(router);



app.listen(port, () => {
     console.log(`Servidor rodando na porta ${port}`);
   });




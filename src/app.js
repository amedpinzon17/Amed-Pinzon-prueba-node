import express from 'express';
import productosRouter from './routes/productos.routes.js'


const app = express(); 

app.set("port",5010);

app.use(express.json());

app.use( productosRouter )


export default app;
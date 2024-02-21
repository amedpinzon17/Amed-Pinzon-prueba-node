import {Router} from 'express';
import { methodsHTTP as productos } from '../controller/productos.controllers.js';

const router = Router();

router.get("/api/getproductos", productos.getProductos)
router.post("/api/postProductos", productos.getProductos)


export default router;
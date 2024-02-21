import getConnection from "../db/database.js";

const getProductos = async (req, res ) => {
    try{

       const connection = await getConnection();
    const result = await connection.query("SELECT nombre, barcode, presentacion FROM productos")

    res.json(result); 
    }catch(err){
    res.status(500);
    res.send(err.message);
}
    
}


const postProductos = async (req, res) => {
    try{
        const {nombre, barcode, presentacion} = red.body;
        const product = {nombre, barcode, presentacion}
        const connection = await getConnection();
        const results = await connection.query("INSERT INTO productos SET ?", product);

        res.json(results);
    }catch(err){
        res.status(500);
        res.send(err.message);
    }
}




export const methodsHTTP = {
    getProductos,
    postProductos
}
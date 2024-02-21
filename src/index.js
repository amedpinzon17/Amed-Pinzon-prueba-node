import app from './app.js';


const main = () => {
    app.listen(app.get("port"));

    console.log(`el servido esta coriendo en el puerto ${app.get("port")}`);
}

main();
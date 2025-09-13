require("dotenv").config();
const express = require("express");
const app=express();

const path=require("path");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'src/views'));
const mainRouter = require("./src/routes/main.routes");
app.use(mainRouter)
app.use('/productos', require('./src/routes/productos.router'));
app.use('/usuarios', require('./src/routes/usuarios.router'));
app.use('/carts', require('./src/routes/carts.router'));
app.use('/categorias', require('./src/routes/categorias.router'));
app.use('/categorias2', require('./src/routes/categorias2.router'));
app.use('/inventario', require('./src/routes/inventario.router'));
const PORT= process.env.PORT || 3001;
app.listen(PORT,()=>console.log(`http://localhost:${PORT}`))
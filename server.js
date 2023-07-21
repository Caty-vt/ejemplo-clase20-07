//1 importar
import express from "express";
import hbs from "hbs";

//1 recuperar de ruta raiz
import { dirname } from "path";
import { fileURLToPath } from "url";

//4
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//5 lista de productos
let listado = [{nombre:"Tulipan",
                descripcion:"este es un Tulipan",
                link:"/img/img1.jpg"},
                {nombre:"Lotto",
                descripcion:"este es una flor de Lotto",
                link:"/img/img2.jpg"},      
                {nombre:"Margarita",
                descripcion:"esta es una Margarita",
                link:"/img/img3.jpg"}];

//1 constantes
const app = express();
app.set("view engine", "hbs");
app.use(express.static("public"));
hbs.registerPartials(__dirname+"/views/partials");//3

app.get("/", (req, res) =>{
    res.render("index");//2 cmbio se send
});
app.get("/productos", (req, res) =>{
    res.render("productos",{listado});//2 nueva pestana
});

app.get("/contacto", (req, res) =>{
    res.render("contacto", );//2 nueva pestana
});

app.get("/plano", (req, res) =>{
    res.render("plano");//2 cmbio se send
});

app.get("*", (req, res) =>{
    res.status(404).send("Pagina no existe");//2 cmbio se send
});

//1 llamarlo
app.listen(3000, () =>{console.log("Servicio levantado en puerto 3000")});

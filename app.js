const peliculas = require('./peliculas');

const listadoDePeliculas = ()=>{
  console.log("listado de peluculas: ");
  
  peliculas.forEach(element => {
    console.log(element);
  });
}

listadoDePeliculas();
function miMenu(){
    var x = document.getElementById("menu");
    if(x.className === "mimenu"){
        x.className += " responsive";
    }else{
        x.className = "mimenu";
    }
}

//*Graficos tipo pie Plotly js ***//

const arrayx = ["Manzanas", "Bananas","Peras","Guindas","Uvas"];
const arrayy = ["25","25","15","20","10"];

const titulo ={title: "stock de productos"};

const datos = [{labels: arrayx, values:arrayy, type:"pie"}];
Plotly.newPlot("miplot", datos, titulo);


const arrayxx = ["Maas", "Banaas","Pera","Gundas","Uvs"];
const arrayyy = ["25","25","15","20","10"];

const titulo2={title: "stock de productos"};

const datos2 = [{labels: arrayxx, values:arrayyy, type:"pie"}];
Plotly.newPlot("miplot2", datos2, titulo2);
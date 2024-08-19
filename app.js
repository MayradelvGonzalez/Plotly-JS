function miMenu(){
    var x = document.getElementById("menu");
    if(x.className === "mimenu"){
        x.className += " responsive";
    }else{
        x.className = "mimenu";
    }
}

//*Graficos tipo pie Plotly js ***//

const arrayx = ["Polos negros", "zapatos marrones","lentes rosas","sombreros azules","camisa verde"];
const arrayy = ["35","23","15","20","37"];

const titulo ={title: "stock de productos"};

const datos = [{labels: arrayx, values:arrayy, type:"pie"}];
Plotly.newPlot("miplot", datos, titulo);

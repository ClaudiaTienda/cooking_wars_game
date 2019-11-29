class Calculos{

    constructor(){

    }

    calcularDistancia(x1,x2,y1,y2){
        let distancia=  Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
        //console.log(x1);
        //console.log(x2);
        //console.log(y1);
        //console.log(y2);
        return distancia;
    }
    
}
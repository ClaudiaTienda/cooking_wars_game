class Player{

    constructor(personaje){
        this.personaje= personaje;
        this.calculos= new Calculos();
    }

    ejecutarAccion(listaObjetos){
        for(let i=0; i<listaObjetos.length; i++){
            let objeto= listaObjetos[i];
            this.interactuar(objeto);
        }
        game.interactuaHamburguesa(this);
    }

    interactuar(objeto){
        if(this.calculos.calcularDistancia(this.personaje.position.x,objeto.modelo.position.x,this.personaje.position.z,objeto.modelo.position.z)<5){
            objeto.interactuar(this.personaje);
        }else if(this.calculos.calcularDistancia(this.personaje.position.x,objeto.modelo2.position.x,this.personaje.position.z,objeto.modelo2.position.z)<8){ 
            objeto.interactuar(this.personaje);
        }
    }

}
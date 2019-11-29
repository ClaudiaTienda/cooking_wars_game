class Game{

    constructor(){
        this.hamburguesaCompleta=false;
        this.meta1x=-41;
        this.meta1z=-35;
    }

    gameStart(){

        //preparar hamburguesa

        scene.add();
    }

    update(deltatime){
        let listaCompletada=[];
        for(let i=0; i<listaObjetos.length; i++){
            let objeto= listaObjetos[i];
            if(objeto.completa===true){
                listaCompletada.push(true);
            }
        }

        if(listaCompletada.length>3 && !this.hamburguesaCompleta){
            for(let i=0; i<listaObjetos.length; i++){
                let objeto= listaObjetos[i];
                scene.remove(objeto.modelo2);
                scene.add(hamburguesa1);
                this.hamburguesaCompleta=true;
            }
        }

        if(this.hamburguesaCompleta){
            this.moverHamburguesa();
        }

        
    }

    interactuaHamburguesa(player){
        console.log(calculos.calcularDistancia(this.meta1x,hamburguesa1.position.x,this.meta1z,hamburguesa1.position.z));
        if(this.hamburguesaCompleta && calculos.calcularDistancia(player.personaje.position.x,hamburguesa1.position.x,player.personaje.position.z,hamburguesa1.position.z)<3.5){
          this.moverHamburguesa();
        }
        if(calculos.calcularDistancia(this.meta1x,hamburguesa1.position.x,this.meta1z,hamburguesa1.position.z)<8){
            this.ganar(player01);
        }
    }

    moverHamburguesa(){
        hamburguesa1.position.x=player01.personaje.position.x+1;
        hamburguesa1.position.y=14;
        hamburguesa1.position.z=player01.personaje.position.z-0.5;
        
        plato01.modelo.position.x=player01.personaje.position.x-1;
        plato01.modelo.position.y=14;
        plato01.modelo.position.z=player01.personaje.position.z+5;
    }

    ganar(personaje){
        console.log("ganaste");
        scene.remove(hamburguesa1);
        scene.remove(plato);
    }
}
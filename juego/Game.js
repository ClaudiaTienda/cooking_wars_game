class Game{

    constructor(){
        this.hamburguesaCompleta=false;
        this.meta1x=-41;
        this.meta1z=-35;
        this.hamburguesaCompleta2=false;
        this.meta2x=35;
        this.meta2z=-35;
        this.ronda1terminada=false;
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

        let listaCompletada2=[];
        for(let i=0; i<listaObjetos2.length; i++){
            let objeto2= listaObjetos2[i];
            if(objeto2.completa===true){
                listaCompletada2.push(true);
            }
        }

        if(listaCompletada2.length>3 && !this.hamburguesaCompleta2){
            for(let i=0; i<listaObjetos2.length; i++){
                let objeto2= listaObjetos2[i];
                scene.remove(objeto2.modelo2);
                scene.add(hamburguesa2);
                this.hamburguesaCompleta2=true;
            }
        }

        if(this.hamburguesaCompleta2){
            this.moverHamburguesa2();
        }
        
    }

    interactuaHamburguesa(player){
        if(this.hamburguesaCompleta && calculos.calcularDistancia(player.personaje.position.x,hamburguesa1.position.x,player.personaje.position.z,hamburguesa1.position.z)<3.5){
          this.moverHamburguesa();
        }
        if(calculos.calcularDistancia(this.meta1x,hamburguesa1.position.x,this.meta1z,hamburguesa1.position.z)<8){
            this.ganar(player01);
        }

        if(this.hamburguesaCompleta2 && calculos.calcularDistancia(player.personaje.position.x,hamburguesa2.position.x,player.personaje.position.z,hamburguesa2.position.z)<3.5){
            this.moverHamburguesa2();
          }
          if(calculos.calcularDistancia(this.meta2x,hamburguesa2.position.x,this.meta2z,hamburguesa2.position.z)<8){
              this.ganar(player02);
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

    moverHamburguesa2(){
        hamburguesa2.position.x=player02.personaje.position.x+1;
        hamburguesa2.position.y=14;
        hamburguesa2.position.z=player02.personaje.position.z-0.5;
        
        plato02.modelo.position.x=player02.personaje.position.x-1;
        plato02.modelo.position.y=14;
        plato02.modelo.position.z=player02.personaje.position.z+5;
    }

    ganar(personaje){
        console.log("ganaste: "+ personaje.player);
        if(personaje===player01 && !this.ronda1terminada){
            this.ronda1terminada=true;
            scene.remove(hamburguesa1);
        }else if(personaje===player02 && !this.ronda1terminada){
            this.ronda1terminada=true;
            scene.remove(hamburguesa2);
        }
    }
}
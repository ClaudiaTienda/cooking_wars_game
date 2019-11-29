class Ingrediente{
    constructor(){
        this.modelo=null;
        this.modelo2=null;
        this.interactuando=false;
        this.procesada=false;
        this.contador=0;
        this.calculos= new Calculos();
        this.completa=false;
    }

    agregarModelo(modelo){
        this.modelo=modelo;
    }
    agregarModelo2(modelo2){
        this.modelo2=modelo2;
    }

    agregarPlato(plato){
        this.plato=plato;
    }
    interactuar(personaje){
        
        if((!this.interactuando && this.contador===0)|| (!this.interactuando && this.contador>200)){
            this.interactuando=true;
            this.modelo.position.x=personaje.position.x;
            this.modelo.position.y=10;
            this.modelo.position.z=personaje.position.z;
        }else{
            this.procesar();
        }
    }

    actualizar(player){
        if(this.interactuando && !this.procesada){
        this.modelo.position.x=player.personaje.position.x;
        this.modelo.position.y=15;
        this.modelo.position.z=player.personaje.position.z;
        this.modelo2.position.x=player.personaje.position.x;
        this.modelo2.position.y=15;
        this.modelo2.position.z=player.personaje.position.z;
        }else{
            if(this.calculos.calcularDistancia(player.personaje.position.x,-41,player.personaje.position.z,-25)<8 && this.contador<201
            && this.calculos.calcularDistancia(this.modelo.position.x,-41,this.modelo.position.z,-25)<8){
                this.contador++;
                console.log(this.contador);
            }
        }
        if(this.contador===200){
            this.modelo2.position.x=this.modelo.position.x;
            this.modelo2.position.y=5.2;
            this.modelo2.position.z=this.modelo.position.z;
            scene.remove(this.modelo);
            scene.add(this.modelo2);
        }
    }
    
    procesar(){
        if(this.calculos.calcularDistancia(this.modelo.position.x,-41,this.modelo.position.z,-25)<8 && this.contador<1){
            this.interactuando=false;
            this.modelo.position.x=-41;
            this.modelo.position.y=6;
            this.modelo.position.z=-25;
        }else if(this.calculos.calcularDistancia(this.modelo2.position.x,plato01.modelo.position.x,this.modelo2.position.z,plato01.modelo.position.z)<9 && this.contador>200 && !this.procesada){
            this.interactuando=false;
            this.procesada=true;
            this.completa=true;
            this.modelo2.position.x=plato01.modelo.position.x+1;
            this.modelo2.position.y=plato01.modelo.position.y;
            this.modelo2.position.z=plato01.modelo.position.z-5;
        }
    }
}
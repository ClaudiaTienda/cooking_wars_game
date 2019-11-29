class Carne{
    constructor(){
        this.modelo=null;
        this.modelo2=null;
        this.interactuando=false;
        this.procesada=false;
        this.completa=false;
        this.contador=0;
        this.contador2=0;
        this.calculos= new Calculos();
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
        this.modelo2.position.x=player.personaje.position.x+4;
        this.modelo2.position.y=15;
        this.modelo2.position.z=player.personaje.position.z;
        }else{
            if(this.contador<201
            && this.calculos.calcularDistancia(this.modelo.position.x,-15.5,this.modelo.position.z,-61.5)<6){ 
                this.contador++;
                console.log(this.contador);
            }else if(this.contador2<201 
                &&this.calculos.calcularDistancia(this.modelo.position.x,13.5,this.modelo.position.z,-62)<6){
                    this.contador2++;
                    console.log(this.contador2);
            }
        }
        if(this.contador===200){
            this.modelo2.position.x=-9;
            this.modelo2.position.y=8.5;
            this.modelo2.position.z=-62.5;
            scene.remove(this.modelo);
            scene.add(this.modelo2);
        }else if(this.contador2===200){
            this.modelo2.position.x=11.5;
            this.modelo2.position.y=8.5;
            this.modelo2.position.z=-62;
            scene.remove(this.modelo);
            scene.add(this.modelo2);
        }

    }
    
    procesar(){
        if(this.calculos.calcularDistancia(this.modelo.position.x,-15.5,this.modelo.position.z,-61.5)<8 && this.contador<1){
            this.interactuando=false;
            this.modelo.position.x=-13;
            this.modelo.position.y=8.5;
            this.modelo.position.z=-63;
        }if(this.calculos.calcularDistancia(this.modelo.position.x,13.5,this.modelo.position.z,-61.5)<8 && this.contador<1){
            this.interactuando=false;
            this.modelo.position.x=9.5;
            this.modelo.position.y=8.5;
            this.modelo.position.z=-62;
        }else if(this.calculos.calcularDistancia(this.modelo2.position.x,plato01.modelo.position.x,this.modelo2.position.z,plato01.modelo.position.z)<9.4 && this.contador>200){
            this.interactuando=false;
            this.procesada=true;
            this.completa=true;
            this.modelo2.position.x=plato01.modelo.position.x+5;
            this.modelo2.position.y=plato01.modelo.position.y;
            this.modelo2.position.z=plato01.modelo.position.z-5;
        }
    }
}
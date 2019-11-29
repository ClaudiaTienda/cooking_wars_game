class Modelos{
    constructor(scene){
		this.scene=scene;
		//this.three= new THREE();
    }

    cargarModelos(){
		//player01
		var loader = new THREE.FBXLoader();
		 loader.load( 'cooking_wars_game/assets/calis_03.fbx', function ( object ) {
			console.log("obj cargandoloo fbx");
			 player1mixer = new THREE.AnimationMixer( object );

			caminando1 = player1mixer.clipAction( object.animations[ 0 ] );
			caminando1.play();

			object.traverse( function ( child ) {

				if ( child.isMesh ) {

					child.castShadow = true;
					child.receiveShadow = true;

				}

			} );
			personaje1=object;
			object.position.x=-20;
			object.position.y=0;
			object.position.z=-50;
			object.scale.x=0.08;
			object.scale.y=0.08;
			object.scale.z=0.08;
			scene.add( object );
			player01= new Player(personaje1);
			isWorldReady[1] = true;
			console.log("obj cargado");
		} );

		//player02
		var loader2 = new THREE.FBXLoader();
		 loader.load( 'cooking_wars_game/assets/player_02.fbx', function ( object ) {
			console.log("obj cargandoloo fbx");
			 player2mixer = new THREE.AnimationMixer( object );

			caminando2 = player2mixer.clipAction( object.animations[ 0 ] );
			caminando2.play();

			object.traverse( function ( child ) {

				if ( child.isMesh ) {

					child.castShadow = true;
					child.receiveShadow = true;

				}

			} );
			personaje2=object;
			object.position.x=15;
			object.position.y=0;
			object.position.z=-50;
			object.scale.x=0.08;
			object.scale.y=0.08;
			object.scale.z=0.08;
			scene.add( object );
			player02= new Player(personaje2);
			isWorldReady[1] = true;
			console.log("obj cargado");
		} );
        //carga de modelos
		//cocina
		loadOBJWithMTL(
			'cooking_wars_game/assets/',
			'cocina_completa.obj',
			'cocina_completa.mtl',
			(cocina) => {
				cocina.position.z=-30;
				cocina.position.y=2;
				cocina.scale.x=3;
				cocina.scale.y=3;
				cocina.scale.z=3;
				cocina.rotation.y=THREE.Math.degToRad(90);
				scene.add(cocina);
				isWorldReady[0] = true;
			}
		);

		loadOBJWithMTL(
			'cooking_wars_game/assets/',
			'cacerola.obj',
			'cacerola.mtl',
			(cacerola) => {
				cacerola.position.x=-15.5;
				cacerola.position.z=-61.5;
				cacerola.position.y=8;
				cacerola.scale.x=4;
				cacerola.scale.y=4;
				cacerola.scale.z=4;
				cacerola.rotation.y=THREE.Math.degToRad(45);
				scene.add(cacerola);

				var cacerola2=cacerola.clone();
				cacerola2.position.x=13.5;
				cacerola2.position.z=-61.5;
				cacerola2.position.y=8;
				cacerola2.scale.x=4;
				cacerola2.scale.y=4;
				cacerola2.scale.z=4;
				cacerola2.rotation.y=THREE.Math.degToRad(165);
				scene.add(cacerola2);
				isWorldReady[0] = true;
			}
		);

		// var personaje3= new THREE.GLTFLoader();
		// personaje3.load('cooking_wars_game/assets/caminando.gltf',function(gltf){
		// 	scene.add(gltf.scene);
		// 	scene.add(gltf.animations);
		// })
		
		//  var loader = new THREE.GLTFLoader();  

		//    loader.load('cooking_wars_game/assets/caminando.gltf',function (data){
		// // var root=  gltf.scene;
		// // scene.add(root);
		//    });
		//personaje1
		// loadOBJWithMTL(
		// 	'cooking_wars_game/assets/',
		// 	'player_01.obj',
		// 	'player_01.mtl',
		// 	(object) => {
		// 		personaje1=object;
		// 		personaje1.position.x=-20;
		// 		personaje1.position.y=0;
		// 		personaje1.position.z=-50;
		// 		personaje1.scale.x=8;
		// 		personaje1.scale.y=8;
		// 		personaje1.scale.z=8;
		// 		scene.add(personaje1);
		// 		personaje1.misRayos=[
		// 			new THREE.Vector3(0, 0, 1),
		// 			new THREE.Vector3(0, 0, -1),
		// 			new THREE.Vector3(1, 0, 0),
		// 			new THREE.Vector3(1, 0, 0)
		// 		];
		// 		player01= new Player(personaje1);
		// 		isWorldReady[1] = true;
		// 	}
		// );
		//personaje2
		// loadOBJWithMTL(
		// 	'cooking_wars_game/assets/',
		// 	'player_02.obj',
		// 	'player_03.mtl',
		// 	(object) => {
		// 		personaje2=object;
		// 		personaje2.position.x=15;
		// 		personaje2.position.z=-50;
		// 		personaje2.scale.x=8;
		// 		personaje2.scale.y=8;
		// 		personaje2.scale.z=8;
		// 		scene.add(personaje2);
		// 		isWorldReady[2] = true;
		// 	}
		// );

		loadOBJWithMTL(
			'cooking_wars_game/assets/',
			'lechuga.obj',
			'lechuga.mtl',
			(object) => {
				lechuga.push(object.clone());
				lechuga[0].position.x=-4;
				lechuga[0].position.y=10;
				lechuga[0].position.z=-30;
				lechuga[0].scale.x=20;
				lechuga[0].scale.y=20;
				lechuga[0].scale.z=20;
				lechugas1.agregarModelo(lechuga[0]);
				//scene.add(lechugas1.modelo);
				scene.add(lechuga[0]);
				
				lechuga.push(object.clone());
				lechuga[1].position.x=0;
				lechuga[1].position.y=10;
				lechuga[1].position.z=-30;
				lechuga[1].scale.x=20;
				lechuga[1].scale.y=20;
				lechuga[1].scale.z=20;
				lechugas2.agregarModelo(lechuga[1]);
				//scene.add(lechugas1.modelo);
				scene.add(lechuga[1]);
				//scene.add(lechuga[1]);
				isWorldReady[2] = true;
			}
        );
        
        loadOBJWithMTL(
			'cooking_wars_game/assets/',
			'lechuga_cortada.obj',
			'lechuga_cortada.mtl',
			(object) => {
				lechuga_cortada=object;
                lechuga_cortada.position.x=0;
                lechuga_cortada.position.y=7;
				lechuga_cortada.position.z=-50;
				lechuga_cortada.scale.x=1.5;
				lechuga_cortada.scale.y=1.5;
                lechuga_cortada.scale.z=1.5;
				lechugas1.agregarModelo2(lechuga_cortada);
				
				lechuga_cortada2=object.clone();
                lechuga_cortada2.position.x=0;
                lechuga_cortada2.position.y=7;
				lechuga_cortada2.position.z=-50;
				lechuga_cortada2.scale.x=1.5;
				lechuga_cortada2.scale.y=1.5;
                lechuga_cortada2.scale.z=1.5;
				lechugas2.agregarModelo2(lechuga_cortada2);
				isWorldReady[2] = true;
			}
		);

		//lechugas1=new Ingrediente(lechuga[0]);
		//scene.add(lechuga[0]);
		//lechugas1.agregarModelo(lechuga_cortada);
				//listaObjetos.push(lechugas1);

		loadOBJWithMTL(
			'cooking_wars_game/assets/',
			'tomate2.obj',
			'tomate2.mtl',
			(object2) => {
				tomate.push(object2.clone());
				tomate[0].position.x=-4;
				tomate[0].position.y=10;
				tomate[0].position.z=-40;
				tomate[0].scale.x=20;
				tomate[0].scale.y=20;
				tomate[0].scale.z=20;
				tomates1.agregarModelo(tomate[0]);
				scene.add(tomate[0]);
				tomate.push(object2.clone());
				tomate[1].position.x=0;
				tomate[1].position.y=10;
				tomate[1].position.z=-40;
				tomate[1].scale.x=20;
				tomate[1].scale.y=20;
				tomate[1].scale.z=20;
				tomates2.agregarModelo(tomate[1]);
				scene.add(tomate[1]);
				isWorldReady[2] = true;
			}
        );
        
        loadOBJWithMTL(
			'cooking_wars_game/assets/',
			'tomate_cortada.obj',
			'tomate_cortada.mtl',
			(object2) => {
				tomate_cortado=object2;
                tomate_cortado.position.x=0;
                tomate_cortado.position.y=7;
				tomate_cortado.position.z=-50;
				tomate_cortado.scale.x=1.5;
				tomate_cortado.scale.y=1.5;
                tomate_cortado.scale.z=1.5;
				tomates1.agregarModelo2(tomate_cortado);
				
				tomate_cortado2=object2.clone();
                tomate_cortado2.position.x=0;
                tomate_cortado2.position.y=7;
				tomate_cortado2.position.z=-50;
				tomate_cortado2.scale.x=1.5;
				tomate_cortado2.scale.y=1.5;
                tomate_cortado2.scale.z=1.5;
				tomates2.agregarModelo2(tomate_cortado2);
				isWorldReady[2] = true;
			}
		);

		
		loadOBJWithMTL(
			'cooking_wars_game/assets/',
			'carne3.obj',
			'carne3.mtl',
			(object) => {
				carne.push(object.clone());
				carne[0].position.x=-4;
				carne[0].position.y=10;
				carne[0].position.z=-22;
				carne[0].scale.x=0.3;
				carne[0].scale.y=0.3;
				carne[0].scale.z=0.3;
				carnes1.agregarModelo(carne[0]);
				scene.add(carne[0]);
				
				carne.push(object.clone());
				carne[1].position.x=0;
				carne[1].position.y=10;
				carne[1].position.z=-22;
				carne[1].scale.x=0.3;
				carne[1].scale.y=0.3;
				carne[1].scale.z=0.3;
				carnes2.agregarModelo(carne[1]);
				scene.add(carne[1]);
				isWorldReady[2] = true;
			}
		);

		loadOBJWithMTL(
			'cooking_wars_game/assets/',
			'carne_cocida.obj',
			'carne_cocida.mtl',
			(object2) => {
				carne_cocida=object2;
                carne_cocida.position.x=0;
                carne_cocida.position.y=7;
				carne_cocida.position.z=-50;
				carne_cocida.scale.x=10;
				carne_cocida.scale.y=10;
                carne_cocida.scale.z=10;
				carnes1.agregarModelo2(carne_cocida);
				
				carne_cocida2=object2.clone();
                carne_cocida2.position.x=0;
                carne_cocida2.position.y=7;
				carne_cocida2.position.z=-50;
				carne_cocida2.scale.x=10;
				carne_cocida2.scale.y=10;
                carne_cocida2.scale.z=10;
				carnes2.agregarModelo2(carne_cocida2);
				isWorldReady[2] = true;
			}
		);


		//pan
		loadOBJWithMTL(
			'cooking_wars_game/assets/',
			'masa.obj',
			'masa.mtl',
			(object) => {
				pan.push(object.clone());
				pan[0].position.x=-4;
				pan[0].position.y=10;
				pan[0].position.z=-50;
				pan[0].scale.x=10;
				pan[0].scale.y=10;
				pan[0].scale.z=10;
				pan1.agregarModelo(pan[0]);
				pan1.agregarModelo2(pan[0]);
				scene.add(pan[0]);
				
				pan.push(object.clone());
				pan[1].position.x=0;
				pan[1].position.y=10;
				pan[1].position.z=-50;
				pan[1].scale.x=10;
				pan[1].scale.y=10;
				pan[1].scale.z=10;
				pan2.agregarModelo(pan[1]);
				pan2.agregarModelo2(pan[1]);
				scene.add(pan[1]);
				isWorldReady[2] = true;
			}
		);

		//tomates1=new Ingrediente(tomate[0]);
		//tomates1.agregarModelo(tomate_cortado);
		//listaObjetos.push(tomates1);
		loadOBJWithMTL(
			'cooking_wars_game/assets/',
			'plato_06.obj',
			'plato_06.mtl',
			(object) => {
				plato=object;
                plato.position.x=-24;
                plato.position.y=5.5;
				plato.position.z=-12;
				plato.scale.x=0.03;
				plato.scale.y=0.03;
                plato.scale.z=0.03;
				plato01= new Plato(plato);
				scene.add(plato);
				isWorldReady[2] = true;
			}
		);
		
		//hamburguesa
		loadOBJWithMTL(
			'cooking_wars_game/assets/',
			'hamburguesa_04.obj',
			'hamburguesa_04.mtl',
			(object) => {
				hamburguesa1=object;
                hamburguesa1.position.x=-22;
                hamburguesa1.position.y=5.5;
				hamburguesa1.position.z=-17.5;
				hamburguesa1.scale.x=0.1;
				hamburguesa1.scale.y=0.1;
				hamburguesa1.scale.z=0.1;
				isWorldReady[2] = true;
			}
		);
//carga de modelos
    }
//funcion carga objetos
    loadOBJWithMTL(path, objFile, mtlFile, onLoadCallback) {
            
        var mtl =  new THREE.MTLLoader();

        mtl.setPath( path );

        mtl.load( mtlFile , (materialCargado) => {
            // Este bloque de codigo solo se ejecutara
            // cuando se complete la carga del material

            var obj = new THREE.OBJLoader();
            obj.setPath( path );
            obj.setMaterials( materialCargado );
            obj.load( objFile , (objetoCargado) => {
                // Este bloque de codigo solo se ejecutara
                // cuando el OBJ esta cargado
                

                onLoadCallback( objetoCargado );
            });
        });
	}
	
	animate(deltaTime) {
		if ( player1mixer ) player1mixer.update( deltaTime );
	}

	animate2(deltaTime) {
		if ( player2mixer ) player2mixer.update( deltaTime );	
	}
//termina funcion cargar objetos
}
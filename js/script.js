
var jugando;



$(document).ready(inicio);
$(document).keydown(capturaTeclado);

function posicion(){
	var calleaux=Math.floor(Math.random() * 5);	
	
	for (var i = 0 ; i <= 4; i++) {		
		if (calles[calleaux]){
			calles[calleaux]=false;
			calleaux++;
			calle=calleaux;			
			
			break;
		}
		else if (calleaux==4)
			calleaux=0;			
		else
			calleaux++;
	}

	switch(calle){
		
		case 1:
			return 40;
			break;
		case 2:
			return 125;
			break;
		case 3:
			return 212;
			break;
		case 4:
			return 290;
			break;		
		default: 
			return 372;
			
	}
}


function inicio(){
	jugando = true;
	calles=[true,true,true,true,true];
	miCanvas = $("#mi_canvas")[0];
	contexto = miCanvas.getContext("2d");
	buffer = document.createElement("canvas");
	quica = new Quica();	
	calacas = [new Calaca(posicion()), new Calaca(posicion()),
				   new Calaca(posicion()), new Calaca(posicion()),
				   new Calaca(posicion())];
	run();	
	
	$('#instrucciones').click(function(){
        $('#popup').fadeIn('slow');
        $('.popup-overlay').fadeIn('slow');
        $('.popup-overlay').height($(window).height());
        return false;
    });
    
    $('#close').click(function(){
        $('#popup').fadeOut('slow');
        $('.popup-overlay').fadeOut('slow');
        return false;
    });
    
    $("#iniciar").click(function(){	
		if(jugando==false)
			inicio();	
	});
}



function capturaTeclado(event){
	if(event.which==38 || event.which==87){
		quica.actualizar('arriba');
		if(jugando==false)
			inicio();
	}
		
	if(event.which==40 || event.which==83){
		quica.actualizar('abajo');		
		if(jugando==false)
			inicio();
	}
	if(event.which==39 || event.which==68){
		quica.actualizar('derecha');
		if(jugando==false)
			inicio();
	}
	if(event.which==37 || event.which==65){
		quica.actualizar('izquierda');
		if(jugando==false)
			inicio();
	}
	
}

function run(){ 
	buffer.width = miCanvas.width;
	buffer.height = miCanvas.height;
	contextoBuffer = buffer.getContext("2d");
		 
	if(jugando){  
		contextoBuffer.clearRect(0,0,buffer.width,buffer.height);

		quica.dibujar(contextoBuffer);
		for(i=0;i<calacas.length;i++){
			calacas[i].dibujar(contextoBuffer);
			calacas[i].actualizar();
			if(quica.colision(calacas[i].x,calacas[i].y)){
				quica.sprite = 3;
				quica.vida--;
				$('#pierde')[0].play();
			}
		}
		
		if(quica.vida <= 0)
			jugando = false;
		
		contexto.clearRect(0,0,miCanvas.width,miCanvas.height);
		contexto.drawImage(buffer, 0, 0);
		setTimeout("run()",20);
		
	}else{
		contextoBuffer.clearRect(0,0,buffer.width,buffer.height);
		contextoBuffer.fillStyle = "#ffffff";
		quica.sprite = 3;
		quica.vida = 0;
		quica.dibujar(contextoBuffer);
		contextoBuffer.font = "50px sans-serif";
		contextoBuffer.fillText("GAMEOVER", 300, 440);
		contextoBuffer.fillStyle = "#ff0000";
		contextoBuffer.font = "15px sans-serif";
		contextoBuffer.fillText("press Any key to try again", 350, 460);
		contexto.clearRect(0,0,miCanvas.width,miCanvas.height);
		contexto.drawImage(buffer, 0, 0);
	}
	
}



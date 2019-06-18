function aleatorio(piso,techo){
	return Math.floor(Math.random() * (techo - piso + 1) + piso);
}

function Calaca(n){
	
	
	var opc = aleatorio(1,6);
	
	this.x = aleatorio(0,600);
	this.y = n;

	if(opc==1){
		this.img = $("#auto1")[0];	
		this.velocidad=aleatorio(20,30);
		
	}
	else if(opc==2){
		this.img = $("#auto2")[0];	
		this.velocidad=aleatorio(10,15);
		
	}
	else if(opc==3){
		this.img = $("#auto3")[0];	
		this.velocidad=aleatorio(5,9);
		//verde
		
	}
	else if(opc==4){
		this.img = $("#auto4")[0];	
		this.velocidad=aleatorio(-15,-10);
		//morado
		
	}
	else if(opc==5){
		this.img = $("#auto5")[0];	
		this.velocidad=aleatorio(-21,-14);
		//blanco
		
	}
	else{
		this.img = $("#auto6")[0];	
		this.velocidad=aleatorio(-12,-7);
		
	}

	
	
		
		
		
		
			
	this.dibujar = function(ctx){
		var img = this.img;
		ctx.drawImage(img,this.x,this.y);
	}
	
	this.actualizar = function(){
		this.x += this.velocidad;
		this.x = (640 + this.x)%640;
	}
}

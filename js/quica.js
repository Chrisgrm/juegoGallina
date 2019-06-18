function Quica(){
	this.x = 310;
	this.y = 2;
	this.img = [$("#abajo")[0],$("#arriba")[0],$("#derecha")[0],$("#muerto")[0]];
	this.sprite = 0;
	this.vida = 1;
	this.puntos = 0;
	this.seguro = "arriba";
	
	this.dibujar = function(ctx){
		var img = this.img[this.sprite];
		var x = this.x;
		var y = this.y;
		ctx.drawImage(img, x, y);
		ctx.save();
		ctx.fillStyle = "#ffffff";
		ctx.font = "12px sans-serif";
		ctx.fillText("puntos: "+ this.puntos, 570, 25);		
		
		if(this.sprite==3){
			ctx.fillStyle = "#ff0000";
			ctx.font = "20px sans-serif";
			ctx.fillText("OUCH!", x, y);
		}
		ctx.restore();
	}
	
	this.actualizar = function(accion){
		if(accion=="arriba" && this.y > 2){
			this.y -= 10;
			this.sprite = 1;
		}
		if(accion=="abajo"  && this.y < 460){
			this.y += 10;
			this.sprite = 0;
		}
		if(accion=="izquierda" && this.x > 1){
			this.x -= 10;
			this.sprite = 1;
		}
		if(accion=="derecha" && this.x < 619){
			this.x += 10;
			this.sprite = 2;
		}	
		
		if(this.y > 340 && this.seguro == "arriba"){
			this.seguro = "abajo";
			this.puntos++;
		}
		if(this.y < 20 && this.seguro == "abajo"){
			this.seguro = "arriba";
			this.puntos++;
		}
	}
	
	this.colision = function(x,y){

		if ((y<=this.y) && (this.y<=y+58) && (x<=this.x) && (this.x<=x+100))
			return true;
		else
			return false;
		
	}
}

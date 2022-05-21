class ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}

		//Que valores falten agregar al cuerpo que definimos en sketch?
		this.x=x;
		this.y = y;
		this.w = w;
		this.h = h;
		
        //Ahora hay que definirle esos valores al cuerpo
		this.body=Bodies.rectangle(x,y,w,h, options);
 		World.add(world, this.body);
		

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}
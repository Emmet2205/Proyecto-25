class paper
{
	constructor(x,y,r)
	{
		var options={
			//Agrega las Propiedades que tendrá el cuerpo.
            isStatic: false, 
			friction: 1,
			density: 1.5,
			restitution: 0.5
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("paper.png");
		
		//this.body=bodies.circle(this.x, this.y, (this.r-20)/2, options);
		//this.body=Body.circle(this.x, this.y, (this.r-20)/2, options);
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options);

		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			//translate(pos.x, pos.y);
			//translate(0, 0);

			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)

			//image(center);
            //imageMode(center);
            imageMode(CENTER);

			image(this.image, 0,0,this.r, this.r)
			
			
			pop()
			
	}

}
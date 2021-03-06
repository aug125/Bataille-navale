function Bateau(id,x,y,j,s,r,p) {
  
	this.id = id;
	this.x_dep = x;
	this.y_dep = y;
	this.x_dest = x;
	this.y_dest = y;
	this.joueur = j;
	this.time_move = 0;
	this.speed = s;
	this.portee = r;
	this.puissance = p;
	this.x = function()
	{
		distanceParcours = distance(this.x_dep, this.y_dep, this.x_dest, this.y_dest);		
		time_delta = (new Date().getTime() - this.time_move) / 1000; // en seconde.
		if (time_delta * this.speed >= distanceParcours)			
			return this.x_dest;			
		else
			return this.x_dep + (this.x_dest - this.x_dep) / distanceParcours * time_delta * this.speed;
	};
	this.y = function()
	{
		distanceParcours = distance(this.x_dep, this.y_dep, this.x_dest, this.y_dest);
		time_delta = (new Date().getTime() - this.time_move) / 1000; // en seconde.	
		if (time_delta * this.speed >= distanceParcours)
			return this.y_dest;
		else
		{
			return this.y_dep + (this.y_dest - this.y_dep) / distanceParcours * time_delta * this.speed;
		}
	};
}

function BateauEnnemi(id,x_dep,y_dep, x_dest, y_dest,j,s,t) {
  
	this.id = id;
	this.x_dep = x_dep;
	this.y_dep = y_dep;
	this.x_dest = x_dest;
	this.y_dest = y_dest;
	this.joueur = j;
	this.time_move = t;
	this.speed = s;
	this.derniereFoisVu = new Date().getTime();
	this.x = function()
	{
		distanceParcours = distance(this.x_dep, this.y_dep, this.x_dest, this.y_dest);		
		time_delta = (new Date().getTime() - this.time_move) / 1000; // en seconde.
		if (time_delta * this.speed >= distanceParcours)			
			return this.x_dest;			
		else
			return this.x_dep + (this.x_dest - this.x_dep) / distanceParcours * time_delta * this.speed;
	};
	this.y = function()
	{
		distanceParcours = distance(this.x_dep, this.y_dep, this.x_dest, this.y_dest);
		time_delta = (new Date().getTime() - this.time_move) / 1000; // en seconde.	
		if (time_delta * this.speed >= distanceParcours)
			return this.y_dest;
		else
		{
			return this.y_dep + (this.y_dest - this.y_dep) / distanceParcours * time_delta * this.speed;
		}
	};
}
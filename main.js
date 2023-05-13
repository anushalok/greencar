//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_width = 75;
greencar_height = 100;
//Set initial position for a car image.
greencar_x = 5;
greencar_y = 225;
function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;
	
	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
	
	
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgTag,0,0,greencar.width,greencar.height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
  if(rover_y = rover_y - 10)
  {
    rover_y = rover_y - 10;
    console.log("When up arrow is pressed, x = " + "| y = " + rover_y);
    uploadBackground();
    uploadrover();
  }
}

function down()
{
  if( rover_y <=500)
  {
    rover_y = rover_y + 10;
    console.log("When down arrow is pressed, x = " + rover_x +" | y = " + rover_y );
    uploadBackground();
    uploadrover();
  }
}

function left()
{
  if(rover_x >= 0)
  {
    rover_x=rover_x-10;
    console.log("When left arrow is pressed,x="+rover_x+"|y="+rover_y);
    uploadBackground();
    uploadrover();
  }
}

function right()
{
  if(rover_x<=700)
  {
    rover_x=rover_x+10;
    console.log("When right arrow is pressed,x="+rover_x+"|y="+rover_y);
    uploadBackground();
    uploadrover();
  }
}

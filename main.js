canvas = document.getElementById ('myCanvas');
ctx = canvas.getContext ("2d");

background_image = "https://img.freepik.com/free-vector/city-parking-lot-with-different-cars_165488-41.jpg?size=626&ext=jpghttps://img.freepik.com/free-vector/city-parking-lot-with-different-cars_165488-41.jpg?size=626&ext=jpg";
greencar_image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRypVEaSHj_h908fj6EKtbmpFxZxcHUXdJKdw&usqp=CAU";

greencar_width = 100;
greencar_height = 150;

greencar_x = 10;
greencar_y = 10;

function add() {
	background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadgreencar;
    greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
ctx.drawImage(background_imgTag , 0, 0, canvas.width, canvas.height)	

}

function uploadgreencar() {
    ctx.drawImage( greencar_imgTag , greencar_x, greencar_y, greencar_width, greencar_height)	
	
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
	if (greencar_y>=0)
    {
        greencar_y = greencar_y-10;
        console.log("When up arrow is pressed, x=" + greencar_x + "| y =" +greencar_y);
        uploadBackground()
        uploadgreencar()
    }
}

function down()
{
	if(greencar_y <=500)
	{
		greencar_y =greencar_y+ 10;
		console.log("When down arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		 uploadgreencar();
	}
}
function left()
{
	if(greencar_y >= 0)
	{
		greencar_x = greencar_x - 10;
		console.log("When left arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		 uploadgreencar();
	}
}
function right()
{
	if(greencar_y <= 700)
	{
		greencar_x = greencar_x + 10;
		console.log("When right arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadgreencar();
   }
}
	
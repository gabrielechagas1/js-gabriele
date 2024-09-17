function setup() {
    createCanvas(700, 700);
   background("rgb(224,32,154)"); 
  } 
    
   function draw()
  {
    stroke ("black");
   fill ( "red");
    
     if (mouseIsPressed)
    rect (mouseX, mouseY, 20, 35);
    } 
  
  
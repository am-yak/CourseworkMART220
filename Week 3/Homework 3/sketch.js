// timer
var timer = 0;
var clock = 0;
//Text font
var dancingfont;
//color
var color1 = [];
var color2 = [];
var color3 = [];
//Coordinates
var cordX = [];
var cordY = [];
//place sizing
var size1 = [];
var size2 = [];
var size3 = [];
// Image labelling
var duck;
var duckX = 601;
var duckY = 450;
var duckzoom = 2;
var rain;
var rainX = 25;
var rainY = 47;
var rainzoom = 1;
var balloon;
var balloonX = 400;
var balloonY = 400;
var balloonzoom = 1;

//preloading
function preload()
{
  dancingfont = loadFont('assets/DancingScript-Bold.ttf');
  duck = loadImage('assets/duck.png');
  rain = loadImage('assets/rain.png');
  balloon = loadImage('assets/Balloon.png');
}

//Initiate lottery
function setup()
{
    createCanvas(800,600);
    for(var i = 0; i < 12; i++)
    {
      color1.push(random(255));
      color2.push(random(255));
      color3.push(random(255));
    }
    for(var i = 0; i < 12; i++)
    { cordX.push(floor(random(70,700))); }
    for(var i = 0; i < 12; i++)
    { cordY.push(floor(random(46,450))); }
    for(var i = 0; i < 12; i++)
    {
      size1.push(floor(random(50,150)));
      size2.push(floor(random(50,150)));
      size3.push(floor(random(50,150)));
    }

    setInterval(pacer, 1000/60);
}

//begin functioning!
function draw()
{
    background(120);
    //setup background and colorize it
    stroke(192,192,192);
    fill(192,192,192);
    rect(25,25,750,550);
    //Marking Territory
    textFont(dancingfont);
    noStroke();
    fill(0);
    textSize(30);
    text("Moving shapes",25,45);
    text("Amber Yascavage",572,575);
    text('Time Ellapsed: ' + clock,555,45);
// Le Duck zoom zoom x-axis
    image(duck, duckX, duckY);
    duckY += duckzoom;
    if(duckY >= height - duck.height || duckY <= duck.height/5)
    {
      duckzoom *= -1;
    }

    duckX += duckzoom;
    if(duckX >= width - duck.width || duckX <= duck.width/5)
    {
      duckzoom *= -1;
    }

// Let it rain, let it rain!
    image(rain, rainX, rainY);
    rainX += rainzoom;
    if(rainX >= width - rain.width || rainX <= rain.width/5)
    {
      rainzoom *= -1;
    }

//Fly Balloons, fly!
    image(balloon, balloonX, balloonY);
    balloonY += balloonzoom;
    if(balloonY >= height - balloon.height || balloonY <= balloon.height/5)
    {
      balloonzoom *= -1;
    }

    // Chameleon time
    if(timer > 1000)
    {
      //You helped here! Coordinates array
      for(var i = 0; i < 12; i++)
      {
        cordX[i] = (floor(random(70,700)));
            }
      for(var i = 0; i < 12; i++)
      {
        cordY[i] = (floor(random(46,450)));
      }
      // Loop array for colors
      for(var i = 0; i < 12; i++)
      {
        color1[i] = (random(255));
        color2[i] = (random(255));
        color3[i] = (random(255));
      }

      //Array looping for various size
      for(var i = 0; i < 12; i++)
      {
        size1[i] = (floor(random(50,150)));
        size2[i] = (floor(random(50,150)));
        size3[i] = (floor(random(50,150)));
      }

        timer = 0;
  }
    timer++;

    // Shape 1
    noStroke();
    fill(color1[6],color2[6],color3[6]);
    quad(cordX[6], cordY[6], cordX[7], cordY[7], cordX[8], cordY[8], cordX[9], cordY[9]);

    // Shape 2
    noStroke();
    fill(color1[7],color2[7],color3[7]);
    triangle(cordX[9],cordY[9],300,400,285,225);

    // Shape 3
    noStroke();
    fill(color1[2],color2[2],color3[2]);
    square(cordX[2],cordY[2],size3[0]);

    // Shape 4
    noStroke();
    fill(color1[3],color2[3],color3[3]);
    ellipse(cordX[3],cordY[3],size1[1], size2[1]);

    // Shape 5
    noStroke();
    fill(color1[4],color2[4],color3[4]);
    rect(cordX[4],cordY[4],size3[1],size1[2]);

    // Shape 6
    noStroke();
    fill(color1[5],color2[5],color3[5]);
    arc(cordX[5],cordY[5],size2[2],size3[2],size1[3], PI + QUARTER_PI);

    // Shape 7
    noStroke();
    fill(color1[0],color2[0],color3[0]);
    square(cordX[0],cordY[0],size1[0]);

    //Shape 8
    noStroke();
    fill(color1[1],color2[1],color3[1]);
    circle(cordX[1],cordY[1],size2[0]);

    // Shape 9
    stroke(color1[8],color2[8],color3[8]);
    strokeWeight(7);
    line(cordX[10],cordY[10], 114,380);
    noStroke();

    // Shape 10
    noStroke();
    fill(color1[9],color2[9],color3[9]);
    rect(cordX[11],cordY[11],size3[4],size1[5]);

}
  function pacer()
  {
    clock++;
    if(clock % 5 == 0)
    {

    }
  }

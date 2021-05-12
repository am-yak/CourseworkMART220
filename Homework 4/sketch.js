// setup player and process
var speedy;
var fly = [];
var i = 0
var x = 50;
var y = 160;
var action;
var fire = [];
var s = 0

var timer = 0

//Preload player assets
function preload()
{
//Flying Sequence
  speedy = loadImage('Assets/Plane/Fly (1).png');
  fly[0] = speedy;

  speedy = loadImage('Assets/Plane/Fly (2).png');
  fly[1] = speedy;
// Shooting sequence
  action = loadImage('Assets/Plane/Shoot (1).png');
  fire[0] = action;

  action = loadImage('Assets/Plane/Shoot (2).png');
  fire[1] = action;

  action = loadImage('Assets/Plane/Shoot (3).png');
  fire[2] = action;

  action = loadImage('Assets/Plane/Shoot (4).png');
  fire[3] = action;

  action = loadImage('Assets/Plane/Shoot (5).png');
  fire[4] = action;
}

//Player area
function setup()
{
  createCanvas(1000,700);
}

//Play!
function draw()
{
  background(125);
  noStroke();
  fill(0);
  textSize(20);
  text('Amber Yascavage', 830, 692);
  image(fire[s]);
  image(fly[i], x, y);


  //counter for speedy
  i += 1;
  // Start movement all over again!
  if (i >= fly.length)
  {
    i = 0;
  }
  if (s >= fire.length)
  {
    s = 0;
  }
  if (keyIsPressed)
  {
      if(key == 'w')
      {
        y -= 1;
      }

      if(key == 's')
      {
        y += 1;
      }

      if(key == 'a')
      {
        x -= 1;
      }

      if(key == 'd')
      {
        x += 1;
      }
      if (key == '')
      {
        s +=1;
      }
    }
}

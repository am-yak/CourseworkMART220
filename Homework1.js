// First time in atom!
// Got a little lost, so I copied the p5 file. I'm not sure if we are just utilizing it as a library or if I was supposed ot take any of that and create my own.
function setup()
{
  createCanvas(800,600);
}
function draw()
{
  background(120);
  //border

  stroke(192,192,192);
  fill(192,192,192);
  rect(25,25,750,550);
  //silver space

  fill(0);
  textSize(25);
  text("Basic Shapes",25,45);
  text("Amber Yascavage",572,575);
  //TEXT yes!

//Shape 1
  noStroke();
  fill(214, 92, 255);
  circle(400,300,400,400);
  //Giant circle

//Shape 2
  noStroke();
  fill(130, 92, 255);
  triangle(140,185,168,130,196,185);
  //Purple Triangle
//Shape 3
  noStroke();
  fill(40, 0, 173);
  triangle(160,185,168,130,196,185);
  //Second triangle

//Shape 4
  noStroke();
  fill(173, 0, 98);
  square(630,400,100);
  //Pink Square

//Shape 5
  noStroke();
  fill(0, 173, 133);
  ellipse(400,300,300,70);
  //Ellipse!

//Shape 6
  stroke(0, 0, 0);
  strokeWeight(10);
  line(400,260,400,110);
  //look, a line!

//Shape 7
  stroke(0,0,0);
  strokeWeight(1);
  fill(35, 215, 203);
  ellipse(600,200,70,200);
  //vertical Ellipse

//Shape 8
  stroke(0,0,0);
  strokeWeight(2);
  fill(214, 86, 34);
  rect(100,400,100,50);
  //burnt orange rectangle

//Shape 9
  noStroke();
  fill(214, 209, 34);
  triangle(360,300,250,400,400,440);
  //Diamond top
  noStroke();
  fill(214, 209, 34);
  triangle(300,550,250,400,400,440);
  //diamond bottom

//Shape 10
  noStroke();
  fill(217, 50, 50);
  rect(650,250,30,100);

}

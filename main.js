var x = document.getElementById("myAudio");
song = "";
img = "";
function preload(){
    img = loadImage("mom.jpg");
    song = loadSound("Teri Ungli Pakad Ke Chala - Laadla 320 Kbps.mp3");
}
function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
}
function draw(){
    image(img,0,0,400,400)
}
function ok(){
x.play()
}
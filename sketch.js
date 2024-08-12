let cor;
let circuloX;
let circuloY;

function setup() {
  createCanvas (400,400);
  background('black');
  cor = color (random(0,225),random(0,225),random(0,225));
  circuloX=[0,0,0];
  circuloY[random(height),random(height),random(height)];
}

function draw(){
  fill(cor)
  circle(posicaoHorizontal,posicaoVertical,20);
 if (mouseX<posicaoHorizontal){
  posicaoHorizontal --}
 if(mouseX >posicaoHorizontal){
    posicaoHorizontal++
    }
 if(mouseY < posicaoVertical){
   posicaoVertical --}
 if(mouseY > posicaoVertical){
  posicaoVertical ++}
 if(mouseY > posicaoVertical){
  posicaoVertical ++}
    if(mouseIsPressed){
      cor = color(random(0,255), random(0,255),
                  random(0,255), random(0,100))}
 

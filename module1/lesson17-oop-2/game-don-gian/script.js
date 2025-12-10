/**
 * Created by nhatnk on 4/26/17.
 */

function NhanVat(image, top, left, width, height){
  this.image = image;
  this.top = top;
  this.left = left;
  this.width = width;
  this.height = height;
  this.speed = 20;

  this.getHeroElement = function(){
    return '<img width="'+ this.width + '"' +
      ' height="'+ this.height + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += this.speed;
    console.log('ok: ' + this.left);
    draw();
  }

  this.moveLeft = function(){
    this.left -= this.speed;
    console.log('ok: ' + this.left);
    draw();
  }

  this.moveDown = function(){
    this.top += this.speed;
    console.log('ok: ' + this.top);
    draw();
  }

  this.moveTop = function(){
    this.top -= this.speed;
    console.log('ok: ' + this.top);
    draw();
  }

}

const doraemonObj = new NhanVat('doraemon.png', 20, 30, 300, 225);
const pikachuObj = new NhanVat('pikachu.png', 100, 250, 150, 150);

function draw() {
  document.getElementById('game').innerHTML = doraemonObj.getHeroElement();
  document.getElementById('game').innerHTML += pikachuObj.getHeroElement();
}

draw();

window.addEventListener('keydown', function(suKien) {
  console.log(suKien.key);
  if (suKien.key === 'ArrowRight') {
    doraemonObj.moveRight();
  } else if (suKien.key === 'ArrowLeft') {
    doraemonObj.moveLeft();
  } else if (suKien.key === 'ArrowDown') {
    doraemonObj.moveDown();
  } else if (suKien.key === 'ArrowUp') {
    doraemonObj.moveTop();
  }
});

/*
 * Hàm tăng tốc độ
 */
function plusSpeedDoraemon(speed) {
  doraemonObj.speed += speed;
  console.log('Thay đổi speed: ' + doraemonObj.speed);
}

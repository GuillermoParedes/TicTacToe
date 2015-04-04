/*
* Author: Guillermo David Paredes Torrez;
* Email : gdavid.ptorrez@gmail.com
*/



// Primer renglon

//_ctx.fillRect(5,5,145,145);
//_ctx.fillRect(165,5,145,145);
//_ctx.fillRect(325,5,145,145);
//
//// Segundo renglon
//
//_ctx.fillRect(5,165,145,145);
//_ctx.fillRect(165,165,145,145);
//_ctx.fillRect(325,165,145,145);
//
//// Tercer renglon
//_ctx.fillRect(5,325,145,145);
//_ctx.fillRect(165,325,145,145);
//_ctx.fillRect(325,325,145,145);

window.onload = function main(){

  'use strict';
  var _canvas = document.getElementById("tictactoe");
  var _ctx = _canvas.getContext("2d");
  tablero(_ctx);
  _canvas.addEventListener("mousedown", mouseDown);
  
}

function tablero(_ctx){
  var _ctx = _ctx;
  for(i = 0 ; i< 3 ; i++){
    y = 5 * (32 * i) + 5;
    for ( j = 0; j < 3 ; j++){
      x = 5 * (32 * j) + 5;
      console.log(x, y);
      _ctx.fillRect(x, y, 145, 145);
    }
  }
}

function mouseDown(e){
  var el = e.target;
  
  var px = e.clientX;
  var py = e.clientY;
  
  var lx = e.offsetLeft;
  var ly = e.offsetTop;
  
  console.log(px, py);
  range(px, py);
}

function range(px, py){
  if(px < 165 && py < 165){
    console.log("cuadro 1");
    circle();
  }
}

function circle(){
  var _ctx = this._ctx;
  
  _ctx.beginPath();
  _ctx.fillStyle = "rgb(125,125,125)";
  _ctx.arc(123,93,70,0,2*Math.PI, true);
  _ctx.fill();
}

//
//5 * 32 = 160
//5 * 64 = 320
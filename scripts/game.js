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

//
//5 * 32 = 160
//5 * 64 = 320
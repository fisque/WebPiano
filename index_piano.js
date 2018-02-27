function play(char) {
  var key = char.charCodeAt(0);
  if (key == 65 || key == 97) { //A, or middle C note
    document.getElementById('noteC').play();
  }
  if (key == 83 || key == 115) { //S, or D note
    document.getElementById('noteD').play();
  }
  if (key == 68 || key == 100) { //D, or E note
    document.getElementById('noteE').play();
  }
  if (key == 70 || key == 102) { //F, or F note
    document.getElementById('noteF').play();
  }
  if (key == 74 || key == 106) { //J, or G note
    document.getElementById('noteG').play();
  }
  if (key == 75 || key == 107) { //K, or A note
    document.getElementById('noteA').play();
  }
  if (key == 76 || key == 108) { //L, or B note
    document.getElementById('noteB').play();
  }
  if (key == 58 || key == 59) { //:, or high C note
    document.getElementById('noteHighC').play();
  }
}

var song = [];
var recorded = [];

function isDisplayed(el) {
  return el.currentStyle ? el.currentStyle.display : getComputedStyle(el, null).display;
}

function recStopRec() {
  if (document.getElementById('rec').style.display == 'none') {
    stoprecord();
  }
  else {
    record();
  }
}

function record() {
  var rec = document.getElementById('rec');
  rec.style.display = 'none';
  var stoprec = document.getElementById('stoprec');
  stoprec.style.display = 'inline';
  stoprec.style.backgroundColor = '#99d6ff';
  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 65: case 97: //A, or middle C note
        song.push("a");
        break;
      case 83: case 115: //S, or D note
        song.push("s");
        break;
      case 68: case 100: //D, or E note
        song.push("d");
        break;
      case 70: case 102: //F, or F note
        song.push("f");
        break;
      case 74: case 106: //J, or G note
        song.push("j");
        break;
      case 75: case 107: //K, or A note
        song.push("k");
        break;
      case 76: case 108: //L, or B note
        song.push("l");
        break;
      case 186: //:, or high C note
        song.push(";");
        break;
    }
  };
}

function stoprecord() {
  recorded.push(song);
  var stoprec = document.getElementById('stoprec');
  stoprec.style.backgroundColor = 'white';
  stoprec.style.display = 'none';
  var rec = document.getElementById('rec');
  rec.style.display = 'inline';
  window.alert("Your song has been recorded!\n"+song.toString());
  song = [];
  //for some strange reason keys remain highlighted after stoprecord() is called?
  //& some extra letters are tracked i'm confused
}

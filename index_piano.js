var song = [];
var recorded = [];

function isDisplayed(el) {
  return el.currentStyle ? el.currentStyle.display : getComputedStyle(el, null).display;
}

function recStopRec() {
  if (document.getElementById('rec').style.display == 'none') {
    stoprecord();
    song = [];
  }
  else {
    song = [];
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
  document.getElementById('recsuccess').style.display = 'inline';
  window.setTimeout(function() {
    document.getElementById('recsuccess').style.display = 'none';
  }, 5000);
  console.log(song);
}

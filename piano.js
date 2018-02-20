//idk what i'm doing lmao



function highlight(element) {
  element.setAttribute("background-color", "#99d6ff");
}

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

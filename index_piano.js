function play(char) {
  var key = char.charCodeAt(0);
  if (key == 65 || key == 97) { //A, or middle C note
    document.getElementById('noteC').play();
    //document.getElementById('Ckey').focus();
    //document.getElementById('A').focus();
  }
  if (key == 83 || key == 115) { //S, or D note
    document.getElementById('noteD').play();
    //document.getElementById('Dkey').focus();
    //document.getElementById('S').focus();
  }
  if (key == 68 || key == 100) { //D, or E note
    document.getElementById('noteE').play();
    //document.getElementById('Ekey').focus();
    //document.getElementById('D').focus();
  }
  if (key == 70 || key == 102) { //F, or F note
    document.getElementById('noteF').play();
    //document.getElementById('Fkey').focus();
    //document.getElementById('F').focus();
  }
  if (key == 74 || key == 106) { //J, or G note
    document.getElementById('noteG').play();
    //document.getElementById('Gkey').focus();
    //document.getElementById('J').focus();
  }
  if (key == 75 || key == 107) { //K, or A note
    document.getElementById('noteA').play();
    //document.getElementById('Akey').focus();
    //document.getElementById('K').focus();
  }
  if (key == 76 || key == 108) { //L, or B note
    document.getElementById('noteB').play();
    //document.getElementById('Bkey').focus();
    //document.getElementById('L').focus();
  }
  if (key == 58 || key == 59) { //:, or high C note
    document.getElementById('noteHighC').play();
    //document.getElementById('HighCkey').focus();
    //document.getElementById('colon').focus();
  }
}

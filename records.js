function remove(elementId){
      if(window.confirm("Are you sure you want to delete this song?")){
        var song = document.getElementById(elementId);
        song.parentNode.removeChild(song);
      }
}
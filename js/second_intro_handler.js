function check_intro2(){
  // store intro has been seen identifier
  if (typeof(Storage) !== "undefined") {
    if (localStorage.getItem("intro2")) {
      var intro2 = 'seen';
    }else{
      localStorage.setItem("intro2", "seen");
      var intro2 = 'not';
    }
    
  } else {
    // Sorry! No Web Storage support..
    console.log('web storage not supported on this browser!');
    var intro2 = 'not';
  }

  if (intro2 == 'not') {
    window.location = 'intro2.html';
  }else{
    window.location = 'index.html';
  }
}
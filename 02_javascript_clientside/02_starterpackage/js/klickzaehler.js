function klickZaehler() {
  var localStorage;

  try {
    localStorage = window.localStorage;
  } catch (e) {
    document.getElementById("result").innerHTML = "sorry, der Browser unterstützt Webstorage nicht";
  }

  if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
      localStorage.clickcount = 1;
  }
  document.getElementById("result").innerHTML = localStorage.clickcount;
}


(function(global, mainAppId) {
  "use strict";

  var app = global.app;
  // global.app.cachedCharacters = {};

  function getFilms(filmUrl, mainDiv) {
    var oReq;

    function reqListener () {
      var i, j, results, row, slicedFilms;


      results = JSON.parse(this.responseText).results;

      for (i = 0, j = results.length; i < j; i += 2) {
        slicedFilms = results.slice(i, i + 2);
        row = app.createFilmGroup(slicedFilms);

        mainDiv.appendChild(row);
      }
      app.createChart("myChart", results);
    }

    oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", filmUrl);
    oReq.send();
  }

  function onLoad() {
    getFilms(global.app.constants.FILM_ROUTE + global.app.constants.FORMAT, document.getElementById(mainAppId));
  }

  window.onload = onLoad;
}(window, "main"));

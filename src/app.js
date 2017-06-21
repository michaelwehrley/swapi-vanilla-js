window.app = window.app || {};

(function(app, mainAppId) {
  "use strict";

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
      app.createChart("myChart", app.films);
    }

    oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", filmUrl);
    oReq.send();
  }

  getFilms(app.constants.FILM_ROUTE, document.getElementById(mainAppId));
}(window.app, "main"));

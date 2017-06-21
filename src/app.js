window.app = window.app || {};

(function(app, mainAppId) {
  "use strict";

  var FILM_ROUTE = "http://swapi.co/api/films/?format=json";

  function getFilms(filmUrl, mainDiv) {
    function reqListener () {
      var results = JSON.parse(this.responseText).results;

      for (var i = 0, j = results.length; i < j; i += 2) {
        var slicedFilms = results.slice(i, i + 2);
        var row = app.createFilmGroup(slicedFilms);

        mainDiv.appendChild(row);
      }
      app.createChart("myChart", app.films);
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", filmUrl);
    oReq.send();
  }

  getFilms(FILM_ROUTE, document.getElementById(mainAppId));
}(window.app, "main"));

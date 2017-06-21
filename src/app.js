window.app = window.app || {};

(function(app, mainAppId) {
  "use strict";

  var allFilms = app.films;

  for (var i = 0, j = allFilms.length; i < j; i += 6) {
    var slicedFilms = allFilms.slice(i, i + 6);
    var row = app.createFilmRow(slicedFilms);

    document.getElementById(mainAppId).appendChild(row);
  }
}(window.app, "root"));

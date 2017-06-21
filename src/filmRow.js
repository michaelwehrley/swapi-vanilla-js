window.app = window.app || {};

(function(app) {
  "use strict";

  function createFilmRow(films) {
    var container = document.createElement("div");

    for (var i = 0, j = films.length; i < j; i += 2) {
      var filmGroup = app.createFilmGroup(films.slice(i, i + 2));

      container.append(filmGroup);
    }

    return container;
  }

  app.createFilmRow = createFilmRow;
}(window.app));

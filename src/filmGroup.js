window.app = window.app || {};

(function(app) {
  "use strict";

  function createFilmGroup(films) {
    var container;

    container = document.createElement("div");

    films.forEach(function(film) {
      var filmCard = app.createFilm(film);

      container.appendChild(filmCard);
    });

    return container;
  }

  app.createFilmGroup = createFilmGroup;
}(window.app));

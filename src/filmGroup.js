window.app = window.app || {};

(function(app) {
  "use strict";

  function createFilmGroup(films) {
    var container;

    container = document.createElement("div");
    container.setAttribute("class", "mr-3 mb-3 d-inline-flex");

    films.forEach(function(film) {
      var filmCard = app.createFilm(film);

      container.appendChild(filmCard);
    });

    return container;
  }

  app.createFilmGroup = createFilmGroup;
}(window.app));

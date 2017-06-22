(function(global) {
  "use strict";

  function createFilmGroup(films) {
    var container;

    container = document.createElement("div");
    container.setAttribute("class", "mr-3 mb-3 d-inline-flex");

    films.forEach(function(film) {
      var filmCard = global.app.createFilm(film);

      container.appendChild(filmCard);
    });

    return container;
  }

  global.app = global.app || {};
  global.app.createFilmGroup = createFilmGroup;
}(window));

window.app = window.app || {};

(function(app) {
  "use strict";

  function posterImg(props) {
    var img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.src = props.url;

    return img;
  }

  function info(props) {
    var container, title, director, characters;

    container = document.createElement("div");
    container.setAttribute("class", "card-block");

    title = document.createElement("h4");
    title.setAttribute("class", "card-title");
    title.textContent = props.title;

    container.appendChild(title);

    director = document.createElement("p");
    director.setAttribute("class", "card-text");
    director.textContent = props.director;

    container.appendChild(director);

    characters = document.createElement("p");
    characters.setAttribute("class", "card-text");
    characters.textContent = "";//props.characters.slice(0, 3);

    container.appendChild(characters);

    return container;
  }

  function footer(props) {
    var footer, content;

    footer = document.createElement("div");
    footer.setAttribute("class", "card-footer");
    content = document.createElement("small");
    content.textContent = props.release_date;
    content.setAttribute("class", "text-muted");
    footer.appendChild(content);

    return footer;
  }

  function createFilm(props) {
    var film;

    film = document.createElement("div");
    film.setAttribute("class", "card float-left");
    film.appendChild(posterImg(props));
    film.appendChild(info(props));
    film.appendChild(footer(props));

    return film;
  }

  app.createFilm = createFilm;
}(window.app));

window.app = window.app || {};

(function(app) {
    "use strict";

    function posterImg(props) {
        var img = document.createElement("img");
        img.src = props.url;

        return img;
    }

    function info(props) {
        var container = document.createElement("div");
        var title = document.createElement("h4");
        title.textContent = props.title;

        container.appendChild(title);

        var director = document.createElement("p");
        director.textContent = props.director;

        container.appendChild(director);

        var characters = document.createElement("p");
        characters.textContent = props.characters.slice(0, 3);

        container.appendChild(characters);

        return container;
    }

    function footer(props) {
        var footer = document.createElement("div");
        footer.textContent = props.release_date;

        return footer;
    }

    app.createFilm = function createFilm(props) {
        var film = document.createElement("div");

        film.appendChild(posterImg(props));
        film.appendChild(info(props));
        film.appendChild(footer(props));

        return film;
    };
}(window.app));

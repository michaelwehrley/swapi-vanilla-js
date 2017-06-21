window.app = window.app || {};

(function(app) {
  "use strict";

  var IMG_DIR = "../public/images/";
  var EXTENSION = ".jpg";

  function getCharacter(characterUrl, characterList) {
    function reqListener () {
      var li;

      li = document.createElement("li");
      li.innerText = JSON.parse(this.responseText).name;
      characterList.append(li);
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", characterUrl + "?format=json");
    oReq.send();
  }

  function posterImg(props) {
    var img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.src = IMG_DIR + props.title.replace(/ /g, "_").toLowerCase() + EXTENSION;

    return img;
  }

  function info(props) {
    var container, title, director, characterList;

    container = document.createElement("div");
    container.setAttribute("class", "card-block p-1");

    title = document.createElement("strong");
    title.setAttribute("class", "card-title");
    title.textContent = props.title;

    container.appendChild(title);

    director = document.createElement("p");
    director.setAttribute("class", "m-1");
    director.textContent = props.director;

    container.appendChild(director);

    characterList = document.createElement("ul");
    props.characters.slice(0, 3).forEach(function(character) {
      getCharacter(character, characterList);
    });

    container.appendChild(characterList);

    return container;
  }

  function footer(props) {
    var footer, content;

    footer = document.createElement("div");
    footer.setAttribute("class", "card-footer");
    content = document.createElement("small");
    content.textContent = "Released " + props.release_date;
    content.setAttribute("class", "text-muted");
    footer.appendChild(content);

    return footer;
  }

  function createFilm(props) {
    var film;

    film = document.createElement("div");
    film.setAttribute("class", "card d-flex");
    film.style.maxWidth = "200px";
    film.appendChild(posterImg(props));
    film.appendChild(info(props));
    film.appendChild(footer(props));

    return film;
  }

  app.createFilm = createFilm;
}(window.app));

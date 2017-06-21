window.app = window.app || {};

(function(app) {
  "use strict";

  var constants;
  constants = app.constants;

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

  function getCharacter(characterUrl, characterList) {
    var oReq;

    function reqListener () {
      var li;

      li = document.createElement("li");
      li.innerText = JSON.parse(this.responseText).name;
      characterList.append(li);
    }

    oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", characterUrl + constants.FORMAT);
    oReq.send();
  }

  function posterImg(props) {
    var img;

    img = document.createElement("img");
    img.setAttribute("class", "card-img-top");
    img.src = constants.IMG_DIR + props.title.replace(/ /g, "_").toLowerCase() + constants.EXTENSION;

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

  app.createFilm = createFilm;
}(window.app));

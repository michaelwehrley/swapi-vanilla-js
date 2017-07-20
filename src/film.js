(function(global) {
  "use strict";

  var constants;
  constants = global.app.constants;
  // var cachedCharacters = {};
  global.app.cachedCharacters = {};

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
    var oReq, cachedCharacters = global.app.cachedCharacters;

    console.log("characterUrl", characterUrl);
    console.log("cachedCharacters[characterUrl]", cachedCharacters[characterUrl])
    if (cachedCharacters[characterUrl]) {
      buildLI(cachedCharacters[characterUrl]);
    } else {
      oReq = new XMLHttpRequest();
      // oReq.addEventListener("load", reqListener);
      oReq.onreadystatechange = reqListener;
      oReq.open("GET", characterUrl + constants.FORMAT);
      oReq.send();
    }

    function reqListener (response) {
      if (oReq.readyState === XMLHttpRequest.DONE) {
        if (oReq.status === 200) {
          cachedCharacters[characterUrl] = JSON.parse(this.responseText).name;
          buildLI(cachedCharacters[characterUrl]);
        } else {
          console.warn('There was a problem with the request.');
        }
      }
    }

    function buildLI(name) {
      var li;

      li = document.createElement("li");
      li.innerHTML = name;
      characterList.appendChild(li);
    }
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

    console.log("global.app.cachedCharaters", global.app.cachedCharacters);

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

  global.app = global.app || {};
  global.app.createFilm = createFilm;
}(window));

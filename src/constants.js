(function(global) {
  "use strict";

  var constants = {};

  constants.EXTENSION = ".jpg";
  constants.FILM_ROUTE = "http://swapi.co/api/films/";
  constants.FORMAT = "?format=json";
  constants.IMG_DIR = "../public/images/";

  global.app = global.app || {};
  global.app.constants = constants;
}(window));

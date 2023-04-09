"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movie2 = exports.movie1 = void 0;
var movie_1 = require("./movie");
var professional_1 = require("./professional");
var movie1 = new movie_1.Movie("Interestellar", 2014, "Science Fiction", "United States");
exports.movie1 = movie1;
var movie2 = new movie_1.Movie("El lobo de Wall Stret", 2013, "Drama/ Comedy", "United Stated");
exports.movie2 = movie2;
var prof1 = new professional_1.Professional("Anne Hathaway", 40, 56, 1.70, false, "United Stated", 1, "Actriz");
var prof2 = new professional_1.Professional("Morgan Freeman", 85, 79, 1.88, false, "United Stated", 1, "Actor");
var prof3 = new professional_1.Professional("Brad Pitt", 59, 78, 1.80, false, "United Stated", 2, "Actor");
movie2.director = prof1;
movie2.actors = [prof1, prof2];
movie2.writer = prof3;
movie2.language = "Inglés",
    movie2.plataforma = "Netflix",
    movie2.isMCU = true;
movie2.mainCharacterName = "No se que es esto :)";
movie2.producer = "Yo";
movie2.distributor = "Yo";
movie2.showMoviesThings();

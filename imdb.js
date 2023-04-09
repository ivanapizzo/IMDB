"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imdb = void 0;
var imdb = /** @class */ (function () {
    function imdb(peliculas) {
        this.peliculas = peliculas;
    }
    imdb.prototype.showMovies = function () {
        for (var i = 0; i < this.peliculas.length; i++) {
            this.peliculas[i].showMoviesThings();
        }
    };
    return imdb;
}());
exports.imdb = imdb;

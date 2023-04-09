"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var professional_1 = require("./professional");
var prof1 = new professional_1.Professional("Anne Hathaway", 40, 56, 1.70, false, "United Stated", 1, "Actriz");
var prof2 = new professional_1.Professional("Morgan Freeman", 85, 79, 1.88, false, "United Stated", 1, "Actor");
var prof3 = new professional_1.Professional("Brad Pitt", 59, 78, 1.80, false, "United Stated", 2, "Actor");
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, genre, nacionality) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }
    Movie.prototype.showMoviesThings = function () {
        console.log("Title: " + this.title);
        console.log("Release Year: " + this.releaseYear);
        for (var i = 0; i < this.actors.length; i++) {
            this.actors[i].showJustName();
            console.log(this.actors[i]);
        }
        console.log("Nationality: " + this.nacionality);
        console.log("Director: " + this.director.showJustName());
        console.log("Writer: " + this.writer.showJustName());
        return "Language: " + this.language + "\n" + "Plataforma: " + this.plataforma + "\n" + "isMCU: " + this.isMCU + "\n" + "Main Character Name: " + this.mainCharacterName + "\n" + "Producer: " + this.producer + "\n" + "Distributor: " + this.distributor + "\n" + "Genre: " + this.genre;
    };
    return Movie;
}());
exports.Movie = Movie;
//return "Title: " + this.title + "\n" + "Release year -" + this.releaseYear + "\n" + "Actors: " + this.actors + "\n" + "Nationality:" + this.nacionality + "\n" + "Director: " + this.director + "\n" + "Writer: " + this.writer + "\n" + "Language: " + this.language + "\n" + "Plataforma: " + this.plataforma + "\n" + "isMCU: " + this.isMCU + "\n" + "Main Character Name: " + this.mainCharacterName + "\n" + "Producer: " + this.producer + "\n" + "Distributor: " + this.distributor + "\n" + "Genre: " + this.genre;
// console.log(this.title);
// console.log(this.releaseYear);
// console.log(this.actors);
// console.log(this.nacionality);
// console.log(this.director.showTheAtributes());
// console.log(this.writer.showTheAtributes());
// console.log(this.language);
// console.log(this.plataforma);
// console.log(this.isMCU);
// console.log(this.mainCharacterName);
// console.log(this.producer);
// console.log(this.distributor);
// console.log(this.genre);
// for (let i = 0; i < this.actors.length; i++){
//     return this.actors[i];
// }
//     console.log(this.director.showTheAtributes());
//     console.log(this.writer.showTheAtributes());
// this.director.showTheAtributes();
// this.writer.showTheAtributes();

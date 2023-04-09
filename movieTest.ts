import { Movie } from "./movie";
import { Professional } from "./professional";


let movie1 = new Movie("Interestellar", 2014, "Science Fiction", "United States");
let movie2 = new Movie("El lobo de Wall Stret",  2013, "Drama/ Comedy", "United Stated");


let prof1 = new Professional ("Anne Hathaway", 40, 56, 1.70, false, "United Stated", 1, "Actriz");
let prof2 = new Professional ("Morgan Freeman", 85, 79, 1.88, false, "United Stated", 1, "Actor");
let prof3 = new Professional ("Brad Pitt", 59, 78, 1.80, false, "United Stated", 2, "Actor");

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





// console.log(movie1.showMoviesThings());
//console.log(movie3.showMoviesThings());

export {movie1, movie2};
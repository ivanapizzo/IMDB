import { imdb } from "./imdb";
import { Movie } from "./movie";
import { movie1, movie2,} from "./movieTest";
import { Professional } from "./professional";


//let movie3 = new Movie("Meet Joe Black", 1998, "Romance, Fantasy", "United Stated");
let movie4 = new Movie("Los Miserables", 2012, "Drama/ Musical", "United Stated");
let movie5 = new Movie("Batman, el caballero de la noche asciende", 2012, "Acción", "United Stated");


let prof1 = new Professional ("Anne Hathaway", 40, 56, 1.70, false, "United Stated", 1, "Actriz");
let prof2 = new Professional ("Morgan Freeman", 85, 79, 1.88, false, "United Stated", 1, "Actor");
let prof3 = new Professional ("Brad Pitt", 59, 78, 1.80, false, "United Stated", 2, "Actor");
//let prof4 = new Professional ("Margot Robbie", 32, 57, 1.68, false, "Australian", 0, "Actriz");
let prof5 = new Professional ("Christopher Nolan", 52, 73, 1.83, false, "British/ American", 0, "Director");


movie4.director = prof5;
movie4.actors = [prof1, prof2];
movie4.writer = prof3;
movie4.language = "Inglés",
movie4.plataforma = "Netflix", 
movie4.isMCU = true;
movie4.mainCharacterName = "No se que es esto :)";
movie4.producer = "Yo";
movie4.distributor = "Yo";

movie5.director = prof5;
movie5.actors = [prof1, prof2];
movie5.writer = prof3;
movie5.language = "Inglés";
movie5.plataforma = "HBO Max";
movie5.isMCU = false;
movie5.mainCharacterName = "Same";
movie5.producer = "Nolan";
movie5.distributor = "Yo"


let arrMovies = [movie4, movie5];

let movies = new imdb (arrMovies);
movies.showMovies();



// reto opcional console.log(JSON.stringify(movies));
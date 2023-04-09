import { Movie } from "./movie";
import { Professional } from "./professional";


export class imdb {

    peliculas: Movie[];

    constructor (peliculas:Movie[]) {

        this.peliculas = peliculas;
    }

    showMovies () {


        for (let i = 0; i < this.peliculas.length; i++){

            this.peliculas[i].showMoviesThings();
        }
    }
}


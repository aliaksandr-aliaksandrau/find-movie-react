export class Movie {
  id?: string;
  title: string;
  genre: string;

  genres?: string[];
  releaseDate: string;
  posterPath: string;
  description?: string;

  constructor(movie: any) {
    this.id = movie.id || "";
    this.title = movie.title || "";
    this.releaseDate = movie.release_date || "";
    this.genres = movie.genres || [];

    this.posterPath = movie.poster_path || "";
  }
}

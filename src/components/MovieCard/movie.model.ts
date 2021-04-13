export class Movie {
  id: string;
  title: string;
  releaseDate: string;
  genres: string[];
  posterPath: string;
  overview: string;
  runtime: number;
  rating: number;

  constructor(movie: any) {
    this.id = movie.id || "";
    this.title = movie.title || "";
    this.releaseDate = movie.release_date || "";
    this.genres = movie.genres || [];
    this.posterPath = movie.poster_path || "";
    this.overview = movie.overview || "";
    this.runtime = movie.runtime || 0;
    this.rating = movie.vote_average || 0;
  }

  get releaseYear() {
    return this.releaseDate ? this.releaseDate.split("-")[0] : "";
  }

  get genresDescription() {
    return this.genres ? this.genres.join(", ") : "";
  }
}

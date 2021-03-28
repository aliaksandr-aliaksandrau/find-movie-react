export class Movie {
  id: string;
  title: string;
  releaseDate: string;
  releaseYear: string;
  description: string;
  genres: string[];
  posterPath: string;
  overview: string;
  runtime: number;
  rating: number;

  genresDesciption: string;

  constructor(movie: any) {
    this.id = movie.id || "";
    this.title = movie.title || "";
    this.releaseDate = movie.release_date || "";
    this.genres = movie.genres || [];
    this.genresDesciption = this.genres.join(", ");
    this.posterPath = movie.poster_path || "";
    this.description = movie.genres.join(", ");
    this.overview = movie.overview || "";
    this.runtime = movie.runtime || 0;
    this.rating = movie.vote_average || 0;

    this.releaseYear = this.releaseDate ? this.releaseDate.split("-")[0] : "";
  }
}

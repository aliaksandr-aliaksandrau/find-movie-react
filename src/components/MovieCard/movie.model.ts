export class Movie {
  id: string;
  title: string;
  releaseDate: string;
  releaseYear: string;
  description: string;
  genres: string[];
  posterPath: string;

  constructor(movie: any) {
    this.id = movie.id || "";
    this.title = movie.title || "";
    this.releaseDate = movie.release_date || "";
    this.genres = movie.genres || [];
    this.posterPath = movie.poster_path || "";
    this.description = movie.genres.join(", ");
    
    this.releaseYear = this.releaseDate ? this.releaseDate.split("-")[0] : "";
  }
}

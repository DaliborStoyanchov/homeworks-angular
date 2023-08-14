import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  @Input() movieListTitle: string;
  @Input() movieTitle: string;

  // movieTitle = this.movieTitle;

  isMoviePanelShown = false;
  movie: Movie = null;

  movieReceive(movie: Movie) {
    console.log(movie);
    this.isMoviePanelShown = true;
    this.movie = movie;
  }
}

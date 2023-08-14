import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie = {
    name: 'Tenet',
    releaseDate: new Date(2023, 11, 6),
    producerName: 'Christopher Nolan',
    genre: 'Sci-Fi',
  };

  @Input() movieTitle: string;

  @Output() showMovieOutput = new EventEmitter<Movie>();

  constructor() {}

  ngOnInit(): void {}

  // local method and event emitter
  showMovieBtnClick() {
    this.showMovieOutput.emit(this.movie);
  }
}

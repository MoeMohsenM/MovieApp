import { Component } from '@angular/core';
import { movieStore } from '../../Store/movie.store';
import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details-component',
  imports: [],
  templateUrl: './movie-details-component.html',
  styleUrl: './movie-details-component.scss'
})
export class MovieDetailsComponent {
  movieStore = inject(movieStore);
  route = inject(ActivatedRoute); // this allows me to access the URL so extract the id

  constructor() {
    const id = this.route.snapshot.paramMap.get('id')

    if (id) {
      this.movieStore.fetchMovieById(+id)
    }
  }
}

import { Component, inject } from '@angular/core';
import { movieStore } from '../../Store/movie.store';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from '../movie-card-component/movie-card-component';
import { PaginationComponent } from "../pagination-component/pagination-component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-wrapper-component',
  imports: [CommonModule, FormsModule, MovieCardComponent, PaginationComponent],
  templateUrl: './movie-wrapper-component.html',
  styleUrl: './movie-wrapper-component.scss'
})
export class MovieWrapperComponent {
  movieStore = inject(movieStore)
  router= inject (Router)

  rows = 10;
  totalRecords = 1000;
  first = 0;

    onPaginationChange(page: number) {
    this.movieStore.paginateMovies(page);
  }

  ngOnInit() {
    this.movieStore.loadMovies();
  }

    navigateToMovie(id: number) {
    this.router.navigate(['/movie', id]);
  }
}

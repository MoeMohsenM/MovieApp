import { Component, inject } from '@angular/core';
import { movieStore } from '../../Store/movie.store';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieCardComponent } from '../movie-card-component/movie-card-component';
import { PaginationComponent } from "../pagination-component/pagination-component";

@Component({
  selector: 'app-movie-wrapper-component',
  imports: [CommonModule, FormsModule, MovieCardComponent, PaginationComponent],
  templateUrl: './movie-wrapper-component.html',
  styleUrl: './movie-wrapper-component.scss'
})
export class MovieWrapperComponent {
  movieStore = inject(movieStore)

  rows = 20;
  totalRecords = 1000;
  first = 0;

  ngOnInit() {
    this.movieStore.loadMovies();
  }

  onPaginationChange(page: number) {
    console.log('Page changed to:', page);
    this.movieStore.paginateMovies(page);
  }
}


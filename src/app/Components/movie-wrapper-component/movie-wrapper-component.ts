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

  rows = 20;
  totalRecords = 1000;
  first = 0;

  ngOnInit() {
    this.movieStore.loadMovies();
  }

  navigateToMovie(id: number) {
    this.router.navigate(['/movie', id]);
  }

  onPaginationChange(page: number) {
    console.log('Page changed to:', page);
    this.movieStore.paginateMovies(page);
  }
}

// import { Component, Input, inject, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { MovieCardComponent } from '../movie-card-component/movie-card-component';
// import { PaginationComponent } from "../pagination-component/pagination-component";
// import { movieStore } from '../../Store/movie.store';
// import { Router } from '@angular/router';

// interface Movie {
//   id: number;
//   title: string;
//   overview: string;
//   poster_path: string;
//   release_date: string;
//   vote_average: number;
// }

// @Component({
//   selector: 'app-movie-wrapper-component',
//   standalone: true,
//   imports: [CommonModule, FormsModule, MovieCardComponent, PaginationComponent],
//   templateUrl: './movie-wrapper-component.html',
//   styleUrl: './movie-wrapper-component.scss'
// })
// export class MovieWrapperComponent implements OnInit {
//   movieStore = inject(movieStore);
//   router = inject(Router);

//   @Input({ required: false }) movies: Movie[] | null = null;

//   rows = 20;
//   totalRecords = 1000;
//   first = 0;

//   ngOnInit() {
//     if (!this.movies) {
//       this.movieStore.paginateMovies(1);
//     }
//   }

//   get pagedMovies(): Movie[] {
//     if (this.movies) {
//       const start = this.first;
//       const end = this.first + this.rows;
//       return this.movies.slice(start, end);
//     } else {
//       return this.movieStore.myMovies();
//     }
//   }

//   get total(): number {
//     return this.movies?.length ?? this.totalRecords;
//   }

//   onPaginationChange(first: number) {
//     this.first = first;
//     if (!this.movies) {
//       const page = Math.floor(first / this.rows) + 1;
//       this.movieStore.paginateMovies(page);
//     }
//   }

//   navigateToMovie(id: number) {
//     this.router.navigate(['/movie', id]);
//   }
// }


import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieStore } from '../../Store/movie.store';
import { SearchComponent } from '../search-component/search-component';
import { MovieCardComponent } from '../movie-card-component/movie-card-component';
import { SearchBarComponent } from "../search-bar-component/search-bar-component";
import { PaginationComponent } from "../pagination-component/pagination-component";
import { MovieWrapperComponent } from "../movie-wrapper-component/movie-wrapper-component";
@Component({
  selector: 'app-search-view',
  templateUrl: './search-view-component.html',
  styleUrl: './search-view-component.scss',
  imports: [SearchComponent, MovieCardComponent, SearchBarComponent, PaginationComponent, MovieWrapperComponent],
  standalone: true
})
export class SearchViewComponent implements OnInit {
  movieStore = inject(movieStore);
  route = inject(ActivatedRoute);
  query = ''

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const query = params.get('query')?.trim() || '';
      this.query = query
      if (query) {
        this.movieStore.searchMovies(query);
      } else {
        this.movieStore.loadMovies();
      }
    });
  }
}

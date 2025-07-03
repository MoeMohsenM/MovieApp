import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../Components/movie-card-component/movie-card-component';
import { movieStore } from '../Store/movie.store';
import { SearchComponent } from "../Components/search-component/search-component";

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, SearchComponent],
  templateUrl: './search-view-component.html',
  styleUrl: './search-view-component.scss'
})
export class SearchPageComponent implements OnInit {
  movieStore = inject(movieStore);
  route = inject(ActivatedRoute);

  constructor() {
    console.log('✅ SearchPageComponent constructor called');
  }

  ngOnInit(): void {
    console.log('✅ ngOnInit in SearchPageComponent');

    this.route.queryParams.subscribe(params => {
      const query = params['q'];
      console.log('✅ Query param received:', query);
      if (query) {
        this.movieStore.searchMovies(query);
      }
    });
  }
}


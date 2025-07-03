import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { movieStore } from '../../Store/movie.store';

@Component({
  selector: 'app-search-component',
  imports: [FormsModule],
  templateUrl: './search-component.html',
  styleUrl: './search-component.scss'
})
export class SearchComponent {
  searchQuery = '';
  movieStore = inject(movieStore);

  onSearch() {
    if (!this.searchQuery.trim()) {
      this.movieStore.loadMovies();
    } else {
      this.movieStore.searchMovies(this.searchQuery);
    }
  }
}

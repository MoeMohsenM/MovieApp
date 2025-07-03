import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar-component',
  imports: [FormsModule],
  templateUrl: './search-bar-component.html',
  styleUrl: './search-bar-component.scss'
})
export class SearchBarComponent {
  searchQuery = '';
  router = inject(Router);

  onSearch() {
    const query = this.searchQuery.trim();
    if (query) {
      this.router.navigate(['/search'], { queryParams: { query } });
    }
  }
}

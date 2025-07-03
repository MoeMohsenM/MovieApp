import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from "../search-bar-component/search-bar-component";

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [FormsModule, SearchBarComponent],
  templateUrl: './search-component.html',
  styleUrl: './search-component.scss'
})
export class SearchComponent {
  searchQuery = '';
  router = inject(Router);

  onSearch() {
    const query = this.searchQuery.trim();
    if (query) {
      this.router.navigate(['/search'], { queryParams: { query } });
    }
  }
}



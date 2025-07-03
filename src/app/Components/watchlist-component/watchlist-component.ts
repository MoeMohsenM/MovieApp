import { Component, inject, computed } from '@angular/core';
import { wishlistStore } from '../../Store/wishlist.store';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card-component/movie-card-component';
import { movieStore } from '../../Store/movie.store';

@Component({
  selector: 'app-watchlist-component',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './watchlist-component.html',
  styleUrl: './watchlist-component.scss'
})
export class WatchlistComponent {
  wishlistStore = inject(wishlistStore);
  router = inject(Router);
  movieStore=inject(movieStore)

  wishlist = computed(() => this.wishlistStore.wishlist());

  navigateToMovie(id: number) {
    this.router.navigate(['/movie', id]);
  }
  goHome() {
    this.router.navigate(['/']);
  }

}

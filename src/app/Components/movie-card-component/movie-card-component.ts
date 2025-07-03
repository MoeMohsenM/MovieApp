import { Component, computed, inject, Input } from '@angular/core';
import { movieStore } from '../../Store/movie.store';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { wishlistStore } from '../../Store/wishlist.store';


@Component({
  selector: 'app-movie-card-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './movie-card-component.html',
  styleUrl: './movie-card-component.scss'
})
export class MovieCardComponent {
  movieService = inject(movieStore)
  @Input() movie: any;

  wishlistStore = inject(wishlistStore);

  isInWishlist = computed(() =>
    this.wishlistStore.wishlist().some(m => m.id === this.movie.id)
  );

  toggleWishlist(event: MouseEvent) {
    event.stopPropagation();
    this.wishlistStore.toggleWishlist(this.movie);
  }

}

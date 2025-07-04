import { Component, computed, inject, Input } from '@angular/core';
import { movieStore } from '../../Store/movie.store';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { wishlistStore } from '../../Store/wishlist.store';
import { Output, EventEmitter } from '@angular/core';//here
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-movie-card-component',
  imports: [FormsModule, CommonModule, CardModule],
  templateUrl: './movie-card-component.html',
  styleUrl: './movie-card-component.scss'
})
export class MovieCardComponent {
  movieStore = inject(movieStore);
  wishlistStore = inject(wishlistStore);
  @Input() movie: any;
  @Output() movieClicked = new EventEmitter<number>();//here



  isInWishlist = computed(() =>
    this.wishlistStore.wishlist().some(m => m.id === this.movie.id)
  );

  toggleWishlist(event: MouseEvent) {
    event.stopPropagation();
    this.wishlistStore.toggleWishlist(this.movie);
  }
  handleClick() {
    this.movieClicked.emit(this.movie.id);
  }

  fallbackImage = 'https://placehold.co/350x400';

  getImageUrl(media: any): string {
    return media.poster_path || media.profile_path
      ? 'https://image.tmdb.org/t/p/w500' +
      (media.poster_path || media.profile_path)
      : this.fallbackImage;
  }

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;

    if (target.src !== this.fallbackImage) {
      target.src = this.fallbackImage;
    }
  }

  getVoteAveragePercent(movieRate: number): number {
    return Math.round((movieRate || 0) * 10);
  }
  getColorClass(score: number): string {
    const percent = this.getVoteAveragePercent(score);
    return percent >= 70 ? 'green-stroke' : 'yellow-stroke';
  }
}






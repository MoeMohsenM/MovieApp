
import { Component, OnInit, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movieStore } from '../../Store/movie.store';
import { CommonModule } from '@angular/common';
import { RecommendationsComponent } from '../recommendations-component/recommendations-component';
import { wishlistStore } from '../../Store/wishlist.store';

@Component({
  selector: 'app-movie-details-component',
  standalone: true,
  imports: [CommonModule, RecommendationsComponent],
  templateUrl: './movie-details-component.html',
  styleUrl: './movie-details-component.scss'
})
export class MovieDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  movieStore = inject(movieStore);
  wishlistStore = inject(wishlistStore);
  router=inject(Router)


  movie: any = null;
  recommendations: any[] = [];

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    const id = +params.get('id')!;
    this.movieStore.fetchMovieById(id);
    this.movieStore.fetchRecommendations(id).subscribe((res: any) => {
      this.recommendations = res.results;
    });
    this.movie = this.movieStore.currentMovie;
  });
}

  isInWishlist = computed(() =>
    !!this.movie() && this.wishlistStore.wishlist().some(m => m.id === this.movie().id)
  );
  toggleWishlist(event: MouseEvent) {
    event.stopPropagation();
    if (this.movie()) {
      this.wishlistStore.toggleWishlist(this.movie());
    }
  }
  goToMovie(movieId: number) {
    this.router.navigate(['/movie', movieId]);
  }

  handleRecommendedMovieClick(movie: any) {
  this.router.navigate(['/movie', movie.id]);
}

}






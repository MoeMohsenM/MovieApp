import {
  signalStore,
  withState,
  withMethods,
  patchState,
  withComputed
} from '@ngrx/signals';
import { computed, inject } from '@angular/core';
import { HttpClientService } from '../Services/http-client';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const initialMovies: Movie[] = [];
const initialWishlist: Movie[] = [];
const initialTvShows: Movie[] = [];

export const movieStore = signalStore(
  { providedIn: 'root' },

  withState({
    myMovies: initialMovies,
    myTvShows: initialTvShows,
    wishlist: initialWishlist
  }),

  withComputed((state) => ({
    wishlistCount:computed( () => state.wishlist().length)
  })),

  withMethods((store) => {
    const http = inject(HttpClientService);

    return {
      loadMovies() {
        http.fetchMovies().subscribe((res: any) => {
          patchState(store, { myMovies: res.results });
        });
      },

      setMovies(movies: Movie[]) {
        patchState(store, { myMovies: movies });
      },

      fetchMovieById(id: number) {
        return http.fetchMoviesById(id);
      },

      fetchRecommendations(id: number) {
        return http.fetchRecommendMovies(id);
      },

      fetchReviews(id: number) {
        return http.fetchMovieReviews(id);
      },

      paginateMovies(page: number) {
        http.paginateMovies(page).subscribe((res: any) => {
          patchState(store, { myMovies: res.results });
        });
      },

      searchMovies(query: string) {
        http.searchResults(query).subscribe((res: any) => {
          patchState(store, { myMovies: res.results });
        });
      },

      changeLanguage(lang: string) {
        http.changeLanguage(lang).subscribe((res: any) => {
          patchState(store, { myMovies: res.results });
        });
      },

      loadTvShows() {
        http.fetchTvShows().subscribe((res: any) => {
          patchState(store, { myTvShows: res.results });
        });
      },

      fetchTvShowDetails(id: number) {
        return http.tvShowsDetails(id);
      },

      toggleWishlist(movie: Movie) {
        const current = store.wishlist;
        const exists = current().some(m => m.id === movie.id);
        const updated = exists
          ? current().filter(m => m.id !== movie.id)
          : [...current(), movie];

        patchState(store, { wishlist: updated });
      },

      removeFromWishlist(id: number) {
        const updated = store.wishlist().filter(m => m.id !== id);
        patchState(store, { wishlist: updated });
      }
    };
  })
);

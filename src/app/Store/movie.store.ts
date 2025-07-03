import {
  signalStore,
  withState,
  withMethods,
  patchState,
} from '@ngrx/signals';
import { inject } from '@angular/core';
import { HttpClientService } from '../Services/http-client';
import { Observable } from 'rxjs';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const initialMovies: Movie[] = [];
const initialTvShows: Movie[] = [];

export const movieStore = signalStore(
  { providedIn: 'root' },

  withState({
    myMovies: initialMovies,
    myTvShows: initialTvShows,
    currentMovie: null as Movie | null,

  }),

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
        return http.fetchMoviesById(id).subscribe((m: Movie) => {
          patchState(store, { currentMovie: m });
        });
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
      }

    };
  })
);

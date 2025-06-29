import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const environment = {
  myURL: 'https://api.themoviedb.org/3',
  myAPI: 'fd5056d12ef02fe62294f9e16155aa63'
};

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private readonly url = environment.myURL;
  private readonly apiKey = environment.myAPI;

  constructor(private http: HttpClient) {}

  fetchMovies() {
    return this.http.get(`${this.url}/movie/now_playing?api_key=${this.apiKey}`);
  }

  fetchMoviesById(id: number) {
    return this.http.get(`${this.url}/movie/${id}?api_key=${this.apiKey}`);
  }

  fetchRecommendMovies(id: number) {
    return this.http.get(`${this.url}/movie/${id}/recommendations?api_key=${this.apiKey}`);
  }

  fetchMovieReviews(id: number) {
    return this.http.get(`${this.url}/movie/${id}/reviews?api_key=${this.apiKey}`);
  }

  paginateMovies(page: number) {
    return this.http.get(`${this.url}/movie/now_playing?api_key=${this.apiKey}&page=${page}`);
  }

  searchResults(query: string) {
    return this.http.get(`${this.url}/search/movie?api_key=${this.apiKey}&query=${encodeURIComponent(query)}`);
  }

  changeLanguage(lang: string) {
    return this.http.get(`${this.url}/movie/now_playing?api_key=${this.apiKey}&language=${lang}`);
  }

  fetchTvShows() {
    return this.http.get(`${this.url}/tv/popular?api_key=${this.apiKey}`);
  }

  tvShowsDetails(id: number) {
    return this.http.get(`${this.url}/tv/${id}?api_key=${this.apiKey}`);
  }
}

import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:"",loadComponent:()=> import('./Components/home-component/home-component').then(m=>m.HomeComponent)},
  {path:'movie/:id',loadComponent:()=> import('./Components/movie-details-component/movie-details-component').then(m=>m.MovieDetailsComponent)},
  {path:'watchlist',loadComponent:()=> import('./Components/watchlist-component/watchlist-component').then(m=>m.WatchlistComponent)},
  {path:'search',loadComponent:()=> import('./Components/search-component/search-component').then(m=>m.SearchComponent)},
  {path:'**',loadComponent:()=> import('./Components/not-found-component/not-found-component').then(m=>m.NotFoundComponent)},
];

import { Component } from '@angular/core';
import { SearchComponent } from "../search-component/search-component";
import { MovieWrapperComponent } from "../movie-wrapper-component/movie-wrapper-component";
import { PaginationComponent } from "../pagination-component/pagination-component";

@Component({
  selector: 'app-home-component',
  imports: [SearchComponent, MovieWrapperComponent, PaginationComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent {

}

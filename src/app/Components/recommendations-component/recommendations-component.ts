import { Component, Input, Output,EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card-component/movie-card-component';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-recommendations-component',
  standalone: true,
  imports: [CommonModule,MovieCardComponent,CarouselModule],
  templateUrl: './recommendations-component.html',
  styleUrl: './recommendations-component.scss'
})
export class RecommendationsComponent {
  @Input() movies: any[] = [];
  @Output() movieSelected = new EventEmitter<any>();//here

  onMovieClick(movie: any) {
    this.movieSelected.emit(movie);//here
  }

  responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1
  }
];

}

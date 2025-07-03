import { Component, Input, Output,EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card-component/movie-card-component';

@Component({
  selector: 'app-recommendations-component',
  standalone: true,
  imports: [CommonModule,MovieCardComponent],
  templateUrl: './recommendations-component.html',
  styleUrl: './recommendations-component.scss'
})
export class RecommendationsComponent {
  @Input() movies: any[] = [];
  @Output() movieSelected = new EventEmitter<any>();//here

  onMovieClick(movie: any) {
    this.movieSelected.emit(movie);//here
  }
}

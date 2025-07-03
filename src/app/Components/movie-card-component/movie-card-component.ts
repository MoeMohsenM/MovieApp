import { Component, inject, Input } from '@angular/core';
import { movieStore } from '../../Store/movie.store';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-card-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './movie-card-component.html',
  styleUrl: './movie-card-component.scss'
})
export class MovieCardComponent {
  movieService = inject(movieStore)
  @Input() movie: any;

}

import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieStore } from '../../Store/movie.store';
import { CommonModule } from '@angular/common';
import { RecommendationsComponent } from "../recommendations-component/recommendations-component";

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

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.movieStore.fetchMovieById(id);
  }

  get movie() {
    return this.movieStore.currentMovie();
  }
}

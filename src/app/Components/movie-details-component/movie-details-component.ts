
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieStore } from '../../Store/movie.store';
import { CommonModule } from '@angular/common';
import { RecommendationsComponent } from '../recommendations-component/recommendations-component';

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

  movie: any = null;
  recommendations: any[] = [];

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;

    this.movieStore.fetchMovieById(id);

    this.movieStore.fetchRecommendations(id).subscribe((res: any) => {
      this.recommendations = res.results;
    });

    this.movie = this.movieStore.currentMovie;
  }
}

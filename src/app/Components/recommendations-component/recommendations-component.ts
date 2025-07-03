import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recommendations-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommendations-component.html',
  styleUrl: './recommendations-component.scss'
})
export class RecommendationsComponent {
  @Input() movies: any[] = [];
}

import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found-component',
  templateUrl: './not-found-component.html',
  styleUrl: './not-found-component.scss'
})
export class NotFoundComponent {
  router = inject(Router);

  goHome() {
    this.router.navigate(['/']);
  }
}

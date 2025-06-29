import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from "./button/button";
import { movieStore } from './Store/movie.store';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected title = 'MovieApp';
   app = inject(movieStore)

  ngOnInit(){
    this.app.loadMovies()
  }
}

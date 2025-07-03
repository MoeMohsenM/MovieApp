import { Component, inject } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { movieStore } from '../../Store/movie.store';
import { FormsModule } from '@angular/forms';
import { IconField } from 'primeng/iconfield';

@Component({
  selector: 'app-navbar-component',
  imports: [DropdownModule, FormsModule,],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss'
})
export class NavbarComponent {
  store = inject(movieStore);

  languages = [
    { name: 'En', code: 'en' },
    { name: 'Ar', code: 'ar' },
    { name: 'Fr', code: 'fr' },
    { name: 'Pt', code: 'pt' }
  ];

  selectedLanguage = this.languages[0];

  onLanguageChange() {
    this.store.changeLanguage(this.selectedLanguage.code);
  }
  onHeartClick() {
    console.log('Heart icon clicked!');
  }
}

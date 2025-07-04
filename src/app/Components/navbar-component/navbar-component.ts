
import { Component, computed, inject } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { movieStore } from '../../Store/movie.store';
import { FormsModule } from '@angular/forms';
import { IconField } from 'primeng/iconfield';
import { RouterModule } from '@angular/router';
import { wishlistStore } from '../../Store/wishlist.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-component',
  imports: [DropdownModule, FormsModule, RouterModule, CommonModule],
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

  wishlistStore = inject(wishlistStore);

  hasWatchlist = computed(() => this.wishlistStore.wishlist().length > 0);
}

import {
  signalStore,
  withState,
  withMethods,
  withComputed,
  patchState
} from '@ngrx/signals';
import { computed } from '@angular/core';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const initialWishlist: Movie[] = [];

export const wishlistStore = signalStore(
  { providedIn: 'root' },

  withState({
    wishlist: initialWishlist
  }),

  withComputed((state) => ({
    wishlistCount: computed(() => state.wishlist().length)
  })),

  withMethods((store) => ({
    addToWishlist(movie: Movie) {
      const current = store.wishlist();
      if (!current.some(m => m.id === movie.id)) {
        patchState(store, { wishlist: [...current, movie] });
      }
    },

    removeFromWishlist(id: number) {
      const updated = store.wishlist().filter(m => m.id !== id);
      patchState(store, { wishlist: updated });
    },

    toggleWishlist(movie: Movie) {
      const current = store.wishlist();
      const exists = current.some(m => m.id === movie.id);
      const updated = exists
        ? current.filter(m => m.id !== movie.id)
        : [...current, movie];

      patchState(store, { wishlist: updated });
    },

    clearWishlist() {
      patchState(store, { wishlist: [] });
    },

    setWishlist(movies: Movie[]) {
      patchState(store, { wishlist: movies });
    }
  }))
);

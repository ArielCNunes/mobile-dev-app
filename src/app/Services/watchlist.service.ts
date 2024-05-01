import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WatchlistService {
  watchlist: string[] = [];
  movieAdded = new EventEmitter<string>(); // Event emitter

  constructor() { }

  addToWatchlist(movie: string) {
    // Add movie poster to local array
    this.watchlist.push(movie);
    // There are methods subscribed to this so we need to let them know that the img has been added to the watchlist
    this.movieAdded.emit(movie);
  }
}

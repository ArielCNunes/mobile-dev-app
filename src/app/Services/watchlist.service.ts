import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WatchlistService {
  watchlist: string[] = [];
  movieAdded = new EventEmitter<string>(); // Event emitter
  private localStorageKey = 'watchlist';

  constructor() { }

  addToWatchlist(poster: string) {
    // Get the already stored watchlist
    let watchlist = this.getWatchlist();
    // Add the poster to the array
    watchlist.push(poster);
    // Use the save method to save the poster to local storage
    this.saveWatchlist(watchlist);
    // Emit the event so that the poster can be displayed by the .ts page
    this.movieAdded.emit(poster);
  }

  getWatchlist(): string[] {
    // Get data from local storage
    const watchlistData = localStorage.getItem(this.localStorageKey);
    /**
     * Check if there is any watchlist data
     * If true, parse it from JSON format and return the array
     * If false, return an empty array
     */
    return watchlistData ? JSON.parse(watchlistData) : [];
  }

  // REQUIREMENT 4 - Data Persistence
  private saveWatchlist(watchlist: string[]) {
    // Convert the array into a JSON string and store it
    localStorage.setItem(this.localStorageKey, JSON.stringify(watchlist));
  }

  clearWatchlist() {
    // Simply removes the data from the array in the local storage
    localStorage.removeItem(this.localStorageKey);
  }
}

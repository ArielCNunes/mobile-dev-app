import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCol, IonRow, IonGrid, IonImg, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common'; // for *ngFor

import { WatchlistService } from '../Services/watchlist.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, CommonModule, IonCol, IonRow, IonGrid, IonImg, IonButton],
})
export class Tab3Page implements OnInit {
  watchlist: string[] = [];

  constructor(private watchlistService: WatchlistService) {}

  ngOnInit() {
    this.watchlist = this.watchlistService.getWatchlist();
    // Subscribe to the movieAdded event
    this.watchlistService.movieAdded.subscribe((movie: string) => {
      this.watchlist.push(movie);
    });
  }

  clearWatchlist() {
    this.watchlistService.clearWatchlist();
    this.watchlist = []; // Clear the local array
  }
}

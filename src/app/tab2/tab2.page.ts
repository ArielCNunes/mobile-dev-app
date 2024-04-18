import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonImg, IonItem, IonInput, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { MoviesInfoService } from '../Services/movies-info.service';
import { CommonModule } from '@angular/common'; // for *ngFor

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, CommonModule, IonCard, IonCardHeader, IonImg, IonItem, IonInput, IonButton, IonIcon]
})
export class Tab2Page implements OnInit {
  Movies:any = [];

  constructor(private movieImagesService:MoviesInfoService) { }

  ngOnInit(): void {
      // Default search
      this.getMovie("action");
  }

  // Search for a movie method
  getMovie(title: any) {
    this.movieImagesService.getMovieImages(title).subscribe(
      (data) => {
        // Get posters from api
        this.Movies = data.Search;
      }
    );
  }
}

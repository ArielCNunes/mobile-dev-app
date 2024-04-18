import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonImg, IonItem, IonSearchbar, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { MoviesInfoService } from '../Services/movies-info.service';
import { CommonModule } from '@angular/common'; // for *ngFor
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, CommonModule, IonCard, IonCardHeader, IonImg, IonItem, IonSearchbar, IonButton, IonIcon, FormsModule]
})
export class Tab2Page implements OnInit {
  Movies:any = []; // array holding all movies
  searchTerm: string = ''; // movie title

  constructor(private movieImagesService:MoviesInfoService) { }

  ngOnInit(): void {
      // Default search - this is what the user will see the page is first launched
      this.getMovie("Mulholland");
  }

  // This method will search for a based using the keyword given by the user
  getMovie(title: any) {
    this.movieImagesService.getMovieImages(title).subscribe(
      (data) => {
        // Get info from api
        this.Movies = [data];
      }
    );
  }
}

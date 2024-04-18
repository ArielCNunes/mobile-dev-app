import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonImg, IonItem, IonInput, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

import { MoviesInfoService } from '../Services/movies-info.service';
import { CommonModule } from '@angular/common'; // for *ngFor
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, CommonModule, IonCard, IonCardHeader, IonImg, IonItem, IonInput, IonButton, IonIcon, FormsModule]
})
export class Tab2Page implements OnInit {
  Movies:any = []; // array holding all movies
  searchTerm: string = ''; // movie title

  constructor(private movieImagesService:MoviesInfoService) { }

  ngOnInit(): void {
      // Default search - this is what the user will see the page is first launched
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

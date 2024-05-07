import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCard, IonCardHeader } from '@ionic/angular/standalone';
import { Tab2Page } from '../tab2/tab2.page';
import { MoviesInfoService } from '../Services/movies-info.service';

@Component({
  selector: 'app-movie-synopsis',
  templateUrl: './movie-synopsis.page.html',
  styleUrls: ['./movie-synopsis.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonCard, Tab2Page, IonCardHeader]
})
export class MovieSynopsisPage implements OnInit {
  title: string = '';
  Movies: any = [];

  constructor(private movieImagesService:MoviesInfoService) { }

  ngOnInit(): void {
    // Get title passed from tab2.page.ts (this data is stored in history.state)
    this.getMovie(history.state.title);
  }
 
  getMovie(title: any) {
    this.movieImagesService.getMovieInfo(title).subscribe(
      (data) => {
        /**
         * Get info from API again by making sure that search bar isn't empty and that the result
         * returned is valid i.e. ("Response": "True")
         */
        if (data.Response === "True") {
          this.Movies = [data];
        } else {
          alert("Enter a valid title.");
        }
      }
    );
  }
}

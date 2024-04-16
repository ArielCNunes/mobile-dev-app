import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

// 6
import { MoviesInfoService } from '../Services/movies-info.service';
import { CommonModule } from '@angular/common'; // for *ngFor

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, CommonModule, IonCard, IonCardHeader]
})
export class Tab2Page implements OnInit {
  movies_images:any = [];

  // 7
  constructor(private movieImagesService:MoviesInfoService) {}

  // 8
  ngOnInit(): void {
    this.movieImagesService.getMovieImages().subscribe(
      (data)=>{
        // Get posters from TMDB API
        this.movies_images = data.posters;
      }
    );
  }
}

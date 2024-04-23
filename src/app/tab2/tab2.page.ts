import { Component, OnInit, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonImg, IonItem, IonSearchbar, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { isPlatform } from '@ionic/angular';
import { MoviesInfoService } from '../Services/movies-info.service';
import { CommonModule } from '@angular/common'; // for *ngFor
import { FormsModule } from '@angular/forms';
import { Browser } from '@capacitor/browser'; // open browser page
import { Keyboard } from '@capacitor/keyboard'; // show keyboard

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, CommonModule, IonCard, IonCardHeader, IonImg, IonItem, IonSearchbar, IonButton, IonIcon, FormsModule]
})
export class Tab2Page implements OnInit {
  @ViewChild('searchBar') searchBar!: IonSearchbar; // this is how we'll interact with the search bar in the .html file
  Movies:any = [];
  title: string = '';

  constructor(private movieImagesService:MoviesInfoService) { }

  ngOnInit(): void {
      // Default search values in case the user does not search for a movie
      this.getMovie("The Tree of Life");
  }

  // Search for a movie
  getMovie(title: any) {
    this.movieImagesService.getMovieInfo(title).subscribe(
      (data) => {
        // Get info from api
        this.Movies = [data];
      }
    );
  }

  // REQUIREMENT 3 - an Ionic Native/Cordova/Capacitor plugin (browser & keyboard)
  // Open movie's IMDB page
  async openIMDBPage(title: string) {
    if (title == '') { // title will always be empty at the start
      const url = `https://www.imdb.com/find/?q=the%20tree%20of%20life&ref_=nv_sr_sm`;
      await Browser.open({ url });
    } else {
      // This code opens a page to an IDBM search
      const url = `https://www.imdb.com/find/?q=${title}`;
      await Browser.open({ url });
    }
  };

  // Show Keyboard when user clicks on search bar
  async showKeyboard() {
    if (isPlatform('ios')) {
      await Keyboard.show();
    } else {
      // For all other platforms + web
      await this.searchBar.setFocus();
    }
  }
}

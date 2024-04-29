import { Component, OnInit, ViewChild } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonImg, IonItem, IonSearchbar, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { isPlatform } from '@ionic/angular';
import { MoviesInfoService } from '../Services/movies-info.service';
import { CommonModule } from '@angular/common'; // for *ngFor
import { FormsModule } from '@angular/forms';
import { Browser } from '@capacitor/browser'; // open browser page
import { Keyboard } from '@capacitor/keyboard'; // show keyboard
import { Router, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, CommonModule, IonCard, IonCardHeader, IonImg, IonItem, IonSearchbar, IonButton, IonIcon, FormsModule, RouterLinkWithHref]
})

export class Tab2Page implements OnInit {
  @ViewChild('searchBar') searchBar!: IonSearchbar; // this is how we'll interact with the search bar in the .html file
  Movies: any = [];
  title: string = '';
  newTitle:string = '';
  isHidden:boolean = true;

  constructor(private movieImagesService:MoviesInfoService, private router:Router) { }

  ngOnInit(): void {
  }

  getMovie(title: any) {
    this.movieImagesService.getMovieInfo(title).subscribe(
      (data) => {
        /**
         * Get info from API by making sure that search bar isn't empty and that the result
         * returned is valid i.e. ("Response": "True")
         */
        if (title.trim().length > 0 && (data.Response === "True")) {
          this.Movies = [data];
          this.isHidden = false;
        } else {
          this.isHidden = true; // in case the user enters nothing after having searched for something
          alert("Enter a valid title.");
        }
      }
    );
  }

  // REQUIREMENT 3 - an Ionic Native/Cordova/Capacitor plugin (browser & keyboard)
  // Open movie's IMDB search page
  async openIMDBPage(title: string) {
    const url = `https://www.imdb.com/find/?q=${title}`;
    await Browser.open({ url });
  };

  // Open trailer on YouTube search page
  async playTrailer(title: string) {
    this.newTitle = title.replace(/\s+/g, '+'); // following youtube's url format for searches
    const url = `https://www.youtube.com/results?search_query=${this.newTitle}+trailer`;
    await Browser.open({ url });
  }

  // Show Keyboard when user clicks on search bar
  async showKeyboard() {
    if (isPlatform('ios')) {
      await Keyboard.show();
    } else {
      // For all other platforms + web
      await this.searchBar.setFocus();
    }
  }

  // Open synopsis page
  synopsis() {
    this.router.navigate(['/movie-synopsis']);
  }
}

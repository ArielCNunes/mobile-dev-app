import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonCard, IonCardHeader } from '@ionic/angular/standalone';
import { Tab2Page } from '../tab2/tab2.page';

@Component({
  selector: 'app-movie-synopsis',
  templateUrl: './movie-synopsis.page.html',
  styleUrls: ['./movie-synopsis.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, IonCard, Tab2Page, IonCardHeader]
})
export class MovieSynopsisPage extends Tab2Page implements OnInit {
  override ngOnInit(): void {
    this.getMovie(this.title);
  }
}

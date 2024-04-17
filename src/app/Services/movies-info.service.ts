import { Injectable } from '@angular/core';

// 3
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesInfoService {
  // 4
  constructor(private httpClient:HttpClient) { }

  // This method will pull the images from the API
  getMovieImages(title: string): Observable<any> {
    // My API key for OMDB API
    const apiKey = 'b771e81d';
    
    // URL to their website
    const apiUrl = `http://www.omdbapi.com/`;
    
    // Api key + key word for genre (given by the user)
    const query = `?apikey=${apiKey}&s=${title}&plot=full`;

    // Return the URL with a list of movies
    return this.httpClient.get(apiUrl + query);
  }
}

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

  // 5 - httpClient logic
  getMovieImages(movieId: string): Observable<any> {
    const apiKey = '66f9b5cce61d3360b26c42afc1d81fff';
    
    // TMDB API link to get every image related to a movie (backdrop, poster, and logos)
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/images`;
    
    // Define query parameter
    const queryParameter = `?api_key=${apiKey}`;

    return this.httpClient.get(apiUrl + queryParameter);
  }
}

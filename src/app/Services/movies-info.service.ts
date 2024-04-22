import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesInfoService {
  // REQUIREMENT 4 - a http client to read JSON data from an external URL
  constructor(private httpClient:HttpClient) { }

  // Get the info from the API
  getMovieInfo(title: string): Observable<any> {
    const apiKey = 'b771e81d';
    
    // URL to their website
    const apiUrl = `http://www.omdbapi.com/`;
    
    // Api key + key word (given by the user) to build the query part of the url
    const query = `?apikey=${apiKey}&t=${title}&plot=full`;

    // This will return a movie object
    return this.httpClient.get(apiUrl + query);
  }
}

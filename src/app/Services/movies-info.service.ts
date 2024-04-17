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
  getMovieImages():Observable<any> {
    return this.httpClient.get('https://api.themoviedb.org/3/movie/320/images?api_key=66f9b5cce61d3360b26c42afc1d81fff');
  }
}

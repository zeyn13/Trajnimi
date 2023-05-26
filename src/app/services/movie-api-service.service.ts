import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieApiServiceService {
  bannerResult() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}


  baseurl = "https://api.themoviedb.org/3";
  apikey = "08cc33bd5ae3a747598ce2ad84376e66";


  //bannerapidata

  // bannerApiData(): Observable<any> {
  //   return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  // }
  getMovies() {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=82e309254331f8d8f952fabdb0d32305&language=en-US&page=2'
    );
  }
}

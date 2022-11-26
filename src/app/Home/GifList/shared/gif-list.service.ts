import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifListService {

  API_KEY = "AIzaSyCF6RBH7NhfpA8pqafiCvIldeQHkNZ5CrY"
  constructor(private _http:HttpClient) { }
  buttonClick = new Subject()


  // grtGif$(searchTerm: string): Observable<any> {
  //   return this.http.get(`https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}`).pipe(
  //     map((response: any) => {
  //       return response.results;
  //     }),
  //   );
  // }

  getGif(searchTerm:string): Observable<string[]> {
    return this._http.get(`https://tenor.googleapis.com/v2/search?q=${searchTerm}&key=${this.API_KEY}&client_key=my_test_app&limit=8`).pipe(
      map((response: any) => {
        return response.results;
      }),
    );
  }



}

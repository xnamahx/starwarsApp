import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FilmServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FilmServiceProvider {

  constructor(public http: HttpClient) {
  }

  getFilms() {
    return this.http.get('https://swapi.co/api/films/');
  }

  getStarships() {
    return this.http.get('https://swapi.co/api/starships');
  }

  getVehicles() {
    return this.http.get('https://swapi.co/api/vehicles/');
  }

  getCharacter(charId:string) {
    //return this.http.get('https://swapi.co/api/people/' . charId);
    return this.http.get(charId);
  }

}

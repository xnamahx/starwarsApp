import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FilmServiceProvider } from '../../providers/film-service/film-service';

@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html'
})

export class CharactersPage {

  characters: Array<{name: string, birth_year: string}> = [];
  charIds: Array<string> = [];

  constructor(
  	public navCtrl: NavController,
  	public filmService: FilmServiceProvider,
    params: NavParams
  ) {
    this.charIds = params.get('characters');
  }

  ionViewDidLoad(){
    for(let characterId of this.charIds){
        this.filmService.getCharacter(characterId).subscribe(
        (data) => { // Success
          let character = {
            name : data['name'],
            birth_year : data['birth_year'],
          }
          this.characters.push(character);
        },
        (error) =>{
          console.error(error);
        }
      )
    }

  }

}

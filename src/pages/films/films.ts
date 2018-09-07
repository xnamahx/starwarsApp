import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { FilmServiceProvider } from '../../providers/film-service/film-service';
import { CharactersPage } from '../films/characters';

@Component({
  selector: 'page-films',
  templateUrl: 'films.html'
})

export class FilmsPage {

  filmsOrdered: Array<{title: string, release_date: string, opening_crawl: string}> = [];

  constructor(
  	public navCtrl: NavController,
  	public filmService: FilmServiceProvider,
    public modalCtrl: ModalController
  ) {}

  presentCharactersModal(characters:any) {
   let charactersModal = this.modalCtrl.create(CharactersPage, { characters });
   charactersModal.present();
  }

  ionViewDidLoad(){
	  this.filmService.getFilms().subscribe(
	      (data) => { // Success
	        let films = data['results'];

          //simple order function
          this.filmsOrdered = films.sort(function(a, b){
              let aProperty = parseInt(a['release_date'].slice(0,4));
              let bProperty = parseInt(b['release_date'].slice(0,4));
              if(aProperty < bProperty){
                  return -1;
              }
              else if( aProperty > bProperty){
                  return 1;
              }
              else{
                  return 0;
              }
          });
          
	      },
	      (error) =>{
	        console.error(error);
	      }
   	  )
  }

}

import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { FilmServiceProvider } from '../../providers/film-service/film-service';
import { CharactersPage } from '../films/characters';

@Component({
  selector: 'page-films',
  templateUrl: 'films.html'
})

export class FilmsPage {

  films: Array<{title: string, release_date: string, opening_crawl: string}> = [];

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
	        this.films = data['results'];
	      },
	      (error) =>{
	        console.error(error);
	      }
   	  )
  }

}

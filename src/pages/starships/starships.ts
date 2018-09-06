import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilmServiceProvider } from '../../providers/film-service/film-service';
/**
 * Generated class for the StarshipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-starships',
  templateUrl: 'starships.html',
})
export class StarshipsPage {

  starships: Array<{name: string, model: string, starship_class: string}> = [];

  constructor(
  	public navCtrl: NavController,
  	public filmService: FilmServiceProvider
  ) { }

  ionViewDidLoad(){
	  this.filmService.getStarships().subscribe(
	      (data) => { // Success
	        this.starships = data['results'];
	      },
	      (error) =>{
	        console.error(error);
	      }
   	  )
  }

}


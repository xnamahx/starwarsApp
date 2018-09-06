import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilmServiceProvider } from '../../providers/film-service/film-service';
/**
 * Generated class for the VehiclesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehicles',
  templateUrl: 'vehicles.html',
})
export class VehiclesPage {

  vehicles: Array<{name: string, model: string, vehicle_class: string}> = [];

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public filmService: FilmServiceProvider
  ) {
  }

  ionViewDidLoad(){
	  this.filmService.getVehicles().subscribe(
	      (data) => { // Success
	        this.vehicles = data['results'];
	      },
	      (error) =>{
	        console.error(error);
	      }
   	  )
  }
}

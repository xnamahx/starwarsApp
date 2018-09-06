import { Component } from '@angular/core';

import { VehiclesPage } from '../vehicles/vehicles';
import { StarshipsPage } from '../starships/starships';
import { FilmsPage } from '../films/films';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FilmsPage;
  tab2Root = StarshipsPage;
  tab3Root = VehiclesPage;

  constructor() {

  }
}

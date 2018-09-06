import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { VehiclesPage } from '../pages/vehicles/vehicles';
import { StarshipsPage } from '../pages/starships/starships';
import { FilmsPage } from '../pages/films/films';
import { CharactersPage } from '../pages/films/characters';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FilmServiceProvider } from '../providers/film-service/film-service';

@NgModule({
  declarations: [
    MyApp,
    VehiclesPage,
    StarshipsPage,
    FilmsPage,
    CharactersPage,
    TabsPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    VehiclesPage,
    StarshipsPage,
    FilmsPage,
    CharactersPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FilmServiceProvider
  ]
})
export class AppModule {}

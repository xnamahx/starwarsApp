import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Firebase } from '@ionic-native/firebase';
import { Dialogs } from '@ionic-native/dialogs';
import { Subject } from 'rxjs/Subject';
import { tap } from 'rxjs/operators';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, private firebase: Firebase,private dialogs: Dialogs, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

      firebase.getToken().then(token => console.log(token)).catch(err=> console.log(err));
      firebase.onNotificationOpen().subscribe(data=>{
        this.dialogs.alert(data.body,data.title)
      }, err=> console.log(err));

      statusBar.styleDefault();
      splashScreen.hide();

    });
  }
}

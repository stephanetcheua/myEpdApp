import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {MyconnectionComponent} from "../components/myconnection/myconnection";
import {VpnconnectionComponent} from "../components/vpnconnection/vpnconnection";
import {QrscanConnectionComponent} from "../components/qrscan-connection/qrscan-connection";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string,icon:string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home',icon:'', component: HomePage },
      { title: 'Mein Wlan',icon:'wifi', component: MyconnectionComponent },
      { title: 'VPN',icon:'cloud', component: VpnconnectionComponent },
      { title: 'QR-Scan',icon:'qr-scanner', component: QrscanConnectionComponent }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

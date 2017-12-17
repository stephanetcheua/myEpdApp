import { Component } from '@angular/core';
import { Platform} from 'ionic-angular';
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {Network} from "@ionic-native/network";
import {OpenNativeSettings} from "@ionic-native/open-native-settings";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public platform: Platform,
              private iab: InAppBrowser,
              private network: Network,
              private openNativeSettings: OpenNativeSettings) {
      setTimeout(() => {
        if (this.network.type === 'none') {
          this.openNativeSettings.open("wifi").then((wifidata) => {

            // Success! Wifi data is here
          }, (err) => {
            // An error occurred
          });
        }
      }, 3000);

  }
  openUrl(url:string) {

    this.platform.ready().then(() => {
      this.iab.create(url,'_blank')

    });
  }
}

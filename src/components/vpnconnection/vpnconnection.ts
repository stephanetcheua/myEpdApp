import { Component } from '@angular/core';
import {OpenNativeSettings} from "@ionic-native/open-native-settings";


/**
 * Generated class for the VpnconnectionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'vpnconnection',
  templateUrl: 'vpnconnection.html'
})
export class VpnconnectionComponent {

  text: string;
  constructor(private openNativeSettings: OpenNativeSettings) {

    this.openNativeSettings.open("settings").then((networkData) => {
      // Success! network data is here
    }, (err) => {
      // An error occurred
    });
  }

}

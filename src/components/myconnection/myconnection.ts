import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot';


@Component({
  selector: 'myconnection',
  templateUrl: 'myconnection.html'
})
export class MyconnectionComponent {

posts:any;
  constructor(private hotspot: Hotspot) {

    this.hotspot.scanWifi().then((networks: Array<HotspotNetwork>) => {
      this.posts= networks;
      alert('networks'+JSON.stringify(networks));
    });

  }

}

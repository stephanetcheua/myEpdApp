import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot';
import {HTTP} from "@ionic-native/http";
import 'rxjs/add/operator/map'


@Component({
  selector: 'myconnection',
  templateUrl: 'myconnection.html'
})
export class MyconnectionComponent {

posts:any;
data:any;
  constructor(private hotspot: Hotspot,public http: HTTP,) {

    this.hotspot.scanWifi().then((networks: Array<HotspotNetwork>) => {
      this.posts= networks;
      alert('networks'+JSON.stringify(networks));
    });
this.ionViewDidLoad();
  }
  ionViewDidLoad(){
    this.loaduser();
  }
 loaduser(){
    this.http.get('https://randomuser.me/api/?results=5',{},{})
      .then(data => {

        this.data = data;
        alert(data.status);
        alert(data.data);
        // alert(data.headers);

      })
      .catch(error => {

        alert(error.status);
        alert(error.error); // error message as string
        // alert(error.headers);

      });
 }
}

import { Component } from '@angular/core';
import {BarcodeScanner,BarcodeScannerOptions} from "@ionic-native/barcode-scanner";

/**
 * Generated class for the QrscanConnectionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'qrscan-connection',
  templateUrl: 'qrscan-connection.html'
})
export class QrscanConnectionComponent {

 options:BarcodeScannerOptions;
 results:{};

  constructor(private barcode: BarcodeScanner) {

  }

async scanBarcode(){
    this.options={
      prompt:'Scan a barcode to see the result'
    }
   this.results= await this.barcode.scan(this.options) ;
   console.log(this.results);
}
async encodeData(){
  const result = await this.barcode.encode(this.barcode.Encode.TEXT_TYPE,'http://learnionic.com')
}
}

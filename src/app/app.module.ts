import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MyconnectionComponent} from "../components/myconnection/myconnection";
import {VpnconnectionComponent} from "../components/vpnconnection/vpnconnection";
import {QrscanConnectionComponent} from "../components/qrscan-connection/qrscan-connection";
import {Network} from "@ionic-native/network";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {OpenNativeSettings} from "@ionic-native/open-native-settings";
import {HTTP} from "@ionic-native/http";
import {Dialogs} from "@ionic-native/dialogs";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {Hotspot} from "@ionic-native/hotspot";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyconnectionComponent,
    VpnconnectionComponent,
    QrscanConnectionComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MyconnectionComponent,
    VpnconnectionComponent,
    QrscanConnectionComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    BarcodeScanner,
    OpenNativeSettings,
    InAppBrowser,
    HTTP,
    Hotspot,
    Dialogs,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

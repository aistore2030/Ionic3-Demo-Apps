import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AccountsPage } from '../pages/accounts/accounts';
import { RechargePage } from '../pages/recharge/recharge';
import { BillpayPage } from '../pages/billpay/billpay';
import { OffersPage } from '../pages/offers/offers';
import { HistoryPage } from '../pages/history/history';
import { UsagePage } from '../pages/usage/usage';
import { FancynosPage } from '../pages/fancynos/fancynos';
import { HotspotsPage } from '../pages/hotspots/hotspots';
import { IntlwifiPage } from '../pages/intlwifi/intlwifi';
import { DBService } from '../services/DBService';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AccountsPage,
    RechargePage,
    BillpayPage,
    OffersPage,
    HistoryPage,
    UsagePage,
    FancynosPage,
    HotspotsPage,
    IntlwifiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AccountsPage,
    RechargePage,
    BillpayPage,
    OffersPage,
    HistoryPage,
    UsagePage,
    FancynosPage,
    HotspotsPage,
    IntlwifiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DBService
  ]
})
export class AppModule {}

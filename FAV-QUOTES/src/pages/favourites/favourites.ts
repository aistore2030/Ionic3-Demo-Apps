import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { QuoteService } from '../../services/quoteService';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../../services/settingsService';


@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
  Favquotes: any = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public favquoteSer: QuoteService,
    public modelCtrl: ModalController,private settingSer:SettingsService) {

  }
  ionViewWillEnter() {
    this.Favquotes = this.favquoteSer.getFavQuote();
  }
  // onOpenMenu(){
  //   this.menuCtrl.open();
  // }
  onViewQuote(selectedQuote) {
    const modal=this.modelCtrl.create(QuotePage,selectedQuote);
    modal.present();
    modal.onDidDismiss((flag:boolean)=>{
      if (flag) {
          this.onRemoveFav(selectedQuote);
        }
    });
  }

  onRemoveFav(selectedQuote){
    this.favquoteSer.removeQuoteFromfav(selectedQuote);
    this.Favquotes=this.favquoteSer.getFavQuote();
  }

  getBackgrund(){
    return this.settingSer.isChnageBackground()?  'secondary' : 'quote';
  }
}

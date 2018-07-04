import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { QuoteService } from '../../services/quoteService';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quotesItems: any;
  constructor(private navParams: NavParams,
    public alertCtrl: AlertController,
    public quoteServ :QuoteService
    ) {
    this.quotesItems = this.navParams.data;
  }
  BtnAddtoFav(selecteditem) {
    const alert = this.alertCtrl.create({
      title: "Add Quote",
      subTitle: "Are you sure..?",
      message: "Do you wanna favourite this Quote",
      buttons: [
        {
          text: "YES",
          handler: () => {
              this.quoteServ.addQuoteTofav(selecteditem);
          }
        },
        {
          text: "NO",
          role: "cancel",
          handler: () => { console.log("cancled") }
        }]
    });

    alert.present();
  }
  BtnRemoveFromFav(selecteditem){
    this.quoteServ.removeQuoteFromfav(selecteditem);
  }

  isFavourite(selectedQuote){
    return this.quoteServ.isFavouriteQuote(selectedQuote);
  }
}

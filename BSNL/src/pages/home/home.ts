import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AccountsPage } from '../accounts/accounts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onBtnAccountsClick(){
    this.navCtrl.push(AccountsPage);
  }
}

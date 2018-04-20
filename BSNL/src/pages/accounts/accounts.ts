import { Component ,OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AccountModel } from '../../models/AccountModel';
import { DBService } from '../../services/DBService';

@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html',
})
export class AccountsPage {
  // Properties/Valirbles
  public IsAccountAdded: boolean = false;
  public RegisteredAccountList:AccountModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams ,private DB:DBService)
  {
    this.RegisteredAccountList=this.DB.GetRegisteredAccounts();

    if(this.RegisteredAccountList.length>0)
    {
      this.IsAccountAdded=true;
    }
  }

  onAddAccountClick() {

  }

  onAccountItemSelected(item:AccountModel){

  }

}

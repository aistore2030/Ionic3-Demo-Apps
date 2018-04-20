import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AccountModel } from '../models/AccountModel';

@Injectable()
export class DBService {

  RegisteredAccounts:AccountModel[]=[];

  constructor(private storage: Storage) { }

  GetAccountType(): Array<string> {
    let AccountType: Array<string> =
    [
      "GSM POSTPAID",
      "GSM PREPAID",
      "CDMA POSTPAID"
    ];
    return AccountType;
  }

  GetRegisteredAccounts(){
    if(this.RegisteredAccounts.length>0){
      return this.RegisteredAccounts;
    }
    else{
      let accObj = new AccountModel("GSM PREPAID",9611191326);
      this.RegisteredAccounts.push(accObj);
      return this.RegisteredAccounts;
    }
  }

  RegisteredNewAccount(Account:AccountModel){
    this.RegisteredAccounts.push(Account);
  }
}

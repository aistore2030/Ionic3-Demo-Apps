import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { SettingsService } from '../../services/settingsService';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private settingSer:SettingsService) {
  }

  onToggle(event){
    console.log(event);
    this.settingSer.setBackground(event.checked);
  }
  checkAltBackground(){
    return this.settingSer.isChnageBackground();
  }
}

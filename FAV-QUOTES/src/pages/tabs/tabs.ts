import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FavouritesPage } from '../favourites/favourites';
import { LibraryPage } from '../library/library';

@Component({
  selector: 'page-library',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  favouritesPage=FavouritesPage;
  libraryPage=LibraryPage;
}

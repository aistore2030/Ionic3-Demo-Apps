import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from "../pages/tabs/tabs";
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
//import { makeDecorator } from '@angular/core/src/util/decorators';
// import { ThrowStmt } from '@angular/compiler/src/output/output_ast';
// import { elementDef } from '@angular/core/src/view/element';
import { AuthService } from '../services/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;
  signPage = SigninPage;
  signupPage = SignupPage;
  @ViewChild('nav') nav: NavController

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private menuCtrl: MenuController , private authService:AuthService) {
    // if(validUsre){
    //   this.isAuthenticated=true;
    //   this.nav.setRoot("LandingPage");
    //  this.rootPage=TabsPage
    // }
    // else
    // {
    //   this.isAuthenticated=false;
    //  this.rootPage=SigninPage
    //   this.nav.setRoot("LoginPage");
    // }
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();

  }
  onLogout() {
    this.authService.signout();
    this.menuCtrl.close();
    this.nav.setRoot(SigninPage)
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthService } from '../../services/auth';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthService,
    private loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  onSignup(form: NgForm) {
    const loading=this.loadingCtrl.create({
    content:"loading...."
    });
    loading.present();
    this.authService.signup(form.value.email, form.value.password);
      //.then(data => {loading.dismiss();console.log(data);});
      // .catch(error=>{loading.dismiss();
      //   const alert=this.alertCtrl.create({
      //   title:"alert.....",
      //   message:"error.message",
      //   buttons:["OK"]
      // });
      //alert.present();
      //console.log(error)});



  }
}

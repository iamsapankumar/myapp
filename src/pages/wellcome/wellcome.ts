import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage } from '../login/login';
import {SignupPage} from '../signup/signup';
/**
 * Generated class for the WellcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-wellcome',
  templateUrl: 'wellcome.html',
})
export class WellcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WellcomePage');
  }

login(){
this.navCtrl.push(LoginPage);
}
signup(){
this.navCtrl.push(SignupPage);
}
}

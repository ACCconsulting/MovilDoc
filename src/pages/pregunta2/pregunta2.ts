import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pregunta3Page } from '../pregunta3/pregunta3';
import { Pregunta4Page } from '../pregunta4/pregunta4';

/**
 * Generated class for the Pregunta2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pregunta2',
  templateUrl: 'pregunta2.html',
})
export class Pregunta2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  backPage(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pregunta2Page');
  }
  pregunta3(){
    this.navCtrl.push(Pregunta3Page);
  }
  pregunta4(){
    this.navCtrl.push(Pregunta4Page);

  }
}

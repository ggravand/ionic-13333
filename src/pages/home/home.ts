import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: number[];
  
  constructor(public navCtrl: NavController) {
    this.items = new Array(50);
    for (var i=0; i<this.items.length; i++) {
      this.items[i] = i;
    }
  }
  
  reorderItems(indeces) {
    console.log('reorder: ' + JSON.stringify(indeces));
    let item = this.items[indeces.from];
    this.items.splice(indeces.from, 1);
    this.items.splice(indeces.to, 0, item);
  }

}

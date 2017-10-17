import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //Variável que 
  slideImg: any[];

  constructor(public navCtrl: NavController) {
      //Variável que recebe imagens
      this.slideImg = [

          { id: 0, image: 'https://i.pinimg.com/564x/74/cb/17/74cb17188e940c3e32909d5c5d96883f.jpg'},
          { id: 1, image: 'https://i.pinimg.com/564x/51/6e/e0/516ee03e7f7a0652d9fdf084e2fa199c.jpg'},
          { id: 2, image: 'https://i.pinimg.com/564x/cf/0b/ba/cf0bba616fc28629153bf1438f3dbd17.jpg'},
          { id: 3, image: 'https://i.pinimg.com/564x/b4/e2/6e/b4e26e25176a8bf4c5307645ef45f745.jpg'},
          { id: 4, image: 'https://i.pinimg.com/564x/e8/26/dc/e826dcad1e8f95c65218e8f9c4ab4902.jpg'},
          { id: 5, image: 'https://i.pinimg.com/564x/15/64/54/156454a2bd43e5bb705b25d172da937c.jpg'}


      ] 

  }

}

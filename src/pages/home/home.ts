import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  input = {
    value1: null,
    value2:null,
    gcdvalue:[],
    divisorA:[],
    divisorB:[],
    
  
       
  }

  constructor(public navCtrl: NavController) {

  }


  gcd(){
    let a=this.input.value1;
    let b=this.input.value2;
    let c=this.input.divisorA;
    let d=this.input.divisorB;
    for(let i=0; i<=a; i++){
      if(a%i== 0){
        c.push(i);
      }

    }
    for(let j=0; j<=b; j++){
      if(b%j== 0){
        d.push(j);
      }
    }
    for(let l=0; l<=c.length; l++){
      this.input.gcdvalue.push(d[d.indexOf(c[l])])
    }
  }
 }



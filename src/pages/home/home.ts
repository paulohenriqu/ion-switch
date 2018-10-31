import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  toogleValue: string;
  options: Array<any>;

  constructor(public navCtrl: NavController) {
    this.options=new Array<any>();
    this.options.push({value:"op1",label:"Opção 1", checked: false});
    this.options.push({value:"op2",label:"Opção 2", checked: false});
    this.options.push({value:"op3",label:"Opção 3", checked: false});    
  }

  toggle(value){
    if(value!=this.toogleValue){
      this.options.filter(option=>option.value!=value).map(option=>option.checked=false);
      this.toogleValue=value;
    }else{
      this.toogleValue="";
    }
  }

}

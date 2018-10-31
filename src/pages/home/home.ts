import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OptionItem } from '../../components/ion-switch/option-item.model';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  toggleValue: string;
  toggleComponentValue: string;
  toggleComponentValueMulti:Array<string>=new Array<string>();
  options: Array<any>;
  optionsComponent: Array<OptionItem>;
  optionsComponentMulti: Array<OptionItem>;

  constructor(public navCtrl: NavController) {

    //direto na home
    this.options=new Array<any>();
    this.options.push({value:"op1",label:"Opção 1", checked: false});
    this.options.push({value:"op2",label:"Opção 2", checked: false});
    this.options.push({value:"op3",label:"Opção 3", checked: false});    

    //componente separado
    this.optionsComponent=new Array<OptionItem>();
    this.optionsComponent.push(new OptionItem("op1", "Opção1"));
    this.optionsComponent.push(new OptionItem("op2", "Opção2"));
    this.optionsComponent.push(new OptionItem("op3", "Opção3"));

    //componente separado escolha múltipla
    this.optionsComponentMulti= JSON.parse(JSON.stringify(this.optionsComponent));
  }

  toggle(value){
    if(value!=this.toggleValue){
      this.options.filter(option=>option.value!=value).map(option=>option.checked=false);
      this.toggleValue=value;
    }else{
      this.toggleValue="";
    }
  }

  changeToggle(event){
    console.log("Component");
    console.log(event);
  }

}

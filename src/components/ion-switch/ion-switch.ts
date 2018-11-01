import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OptionItem } from './option-item.model';

/**
 * Generated class for the IonSwitchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-switch',
  templateUrl: 'ion-switch.html'
})
export class IonSwitchComponent {

  toggleValue: string;
  toggleValueArr: Array<string>;
 
  @Input() options: Array<OptionItem>;
  @Input() multiple: boolean;
  @Input() selected: any;
  @Output() selectedChange: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() {
    this.multiple=false;
    this.toggleValueArr=new Array<string>();
  }

  toggle(option){

    if(this.multiple){
      this.switchValueMulti(option.value);
    }else{
      this.switchValue(option);
    }   
  }

  switchValueMulti(value){
    const checkedOptions = this.options.filter(x => x.checked);
    this.toggleValueArr = checkedOptions.map(x => x.value);    
    this.selectedChange.emit(this.toggleValueArr);
  }

  switchValue(option){
    if(option.value!=this.toggleValue && option.checked){
      this.options.filter(x=>x.value!=option.value).map(x=>x.checked=false);
      this.toggleValue=option.value;
    }else{
      this.toggleValue="";
    }
    this.selectedChange.emit(this.toggleValue);
  }


}

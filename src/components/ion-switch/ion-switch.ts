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

  toggle(value){

    if(this.multiple){
      this.switchValueMulti(value);
    }else{
      this.switchValue(value);
    }   
  }

  switchValueMulti(value){
    const checkedOptions = this.options.filter(x => x.checked);
    this.toggleValueArr = checkedOptions.map(x => x.value);    
    this.selectedChange.emit(checkedOptions.map(x => x.value));
  }

  switchValue(value){
    if(value!=this.toggleValue){
      this.options.filter(option=>option.value!=value).map(option=>option.checked=false);
      this.toggleValue=value;
    }else{
      this.toggleValue="";
    }
    this.selectedChange.emit(this.toggleValue);
  }


}

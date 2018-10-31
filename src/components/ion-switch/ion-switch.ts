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
 
  @Input() options: Array<OptionItem>;
  @Input() selected: string;
  @Output() selectedChange: EventEmitter<string> = new EventEmitter<string>();
  
  constructor() {
  
  }

  toggle(value){
    if(value!=this.toggleValue){
      this.options.filter(option=>option.value!=value).map(option=>option.checked=false);
      this.toggleValue=value;
    }else{
      this.toggleValue="";
    }
    this.selectedChange.emit(this.toggleValue);
  }


}

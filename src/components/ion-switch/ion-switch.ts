import { Component, Input } from '@angular/core';

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

 
  @Input() options: Array<string>;
  constructor() {
  
  }

}

import { NgModule } from '@angular/core';
import { IonSwitchComponent } from './ion-switch/ion-switch';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [IonSwitchComponent],    
	imports: [IonicModule],
	exports: [IonSwitchComponent]
})
export class ComponentsModule {}

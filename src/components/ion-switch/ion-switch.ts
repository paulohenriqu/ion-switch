import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
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
export class IonSwitchComponent implements OnChanges {

  toggleValue: string;
  toggleValueArr: Array<string>;

  @Input() options: Array<OptionItem>;
  @Input() multiple: boolean;
  @Input() selected: any;
  @Output() selectedChange: EventEmitter<any> = new EventEmitter<any>(true);

  constructor() {
    this.multiple = false;
    this.toggleValueArr = new Array<string>();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['options']) {          
      const checkedOptions = this.options.filter(x => x.checked);
      if (checkedOptions.length > 0) {
        this.toggle(checkedOptions[0]);
      }
    }
  }

  toggle(option) {

    if (this.multiple) {
      this.switchValueMulti(option.value);
    } else {
      this.switchValue(option);
    }
  }

  switchValueMulti(value) {
    const checkedOptions = this.options.filter(x => x.checked);
    this.toggleValueArr = checkedOptions.map(x => x.value);
    this.selectedChange.emit(this.toggleValueArr);
  }

  switchValue(option) {
    if (option.value != this.toggleValue && option.checked) {
      this.options.filter(x => x.value != option.value).map(x => x.checked = false);
      this.toggleValue = option.value;
    } else {
      this.toggleValue = "";
    }
    this.selectedChange.emit(this.toggleValue);
  }


}

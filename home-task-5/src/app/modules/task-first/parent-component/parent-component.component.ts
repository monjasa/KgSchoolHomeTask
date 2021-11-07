import { Component } from '@angular/core';
import { Constants } from '../../../../constants/constants';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
})
export class ParentComponentComponent {

  firstName = Constants.FIRST_NAME;

  fullName?: string;

  onFullNameChange(fullName: string) {
    this.fullName = fullName;
  }
}

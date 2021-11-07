import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Constants } from '../../../../constants/constants';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
})
export class ChildComponentComponent {

  @Output() lastNameChange = new EventEmitter<string>();

  @Input() firstName?: string;

  lastName?: string;

  initializeLastName() {
    this.lastName = Constants.LAST_NAME;
    this.lastNameChange.emit(this.buildFullName());
  }

  private buildFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

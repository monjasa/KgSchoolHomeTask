import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-task-second',
  templateUrl: './task-second.component.html',
  styleUrls: ['./task-second.component.scss'],
})
export class TaskSecondComponent implements OnInit {

  private readonly _hexColorDefaultValue: string = '#000000';

  public hexColor: FormControl = new FormControl(this._hexColorDefaultValue);

  public hexColorValue: string = this.hexColor.value;

  ngOnInit(): void {
    this.hexColor.valueChanges
      .pipe(
        filter(value => value.length === this._hexColorDefaultValue.length),
      ).subscribe(value => this.hexColorValue = value);
  }
}

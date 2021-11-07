import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { mapTo, scan, startWith, switchMap, takeWhile } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  selector: 'app-task-first',
  templateUrl: './task-first.component.html',
  styleUrls: ['./task-first.component.scss'],
})
export class TaskFirstComponent implements OnInit {

  public count: FormControl = new FormControl(0);

  public currentValue: number = 0;

  ngOnInit(): void {
    this.count.valueChanges
      .pipe(
        switchMap(countValue => {
          return timer(0, 10)
            .pipe(
              mapTo(this.getValueStep(countValue)),
              startWith(this.currentValue),
              scan((accumulator, value) => accumulator + value),
              takeWhile(this.getTakeWhilePredicate(countValue)),
            );
        }),
      ).subscribe(value => this.currentValue = value);
  }

  private getValueStep(countValue: number): number {
    return countValue > this.currentValue
      ? 1
      : -1;
  }

  private getTakeWhilePredicate(countValue: number): (value: number) => boolean {
    return countValue > this.currentValue
      ? value => value <= countValue
      : value => value >= countValue;
  }
}

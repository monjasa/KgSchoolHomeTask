import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskSecondComponent } from './task-second.component';


@NgModule({
  declarations: [
    TaskSecondComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TaskSecondComponent,
  ]
})
export class TaskSecondModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFirstComponent } from './task-first.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';


@NgModule({
  declarations: [
    TaskFirstComponent,
    ParentComponentComponent,
    ChildComponentComponent,
  ],
  exports: [
    TaskFirstComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class TaskFirstModule { }

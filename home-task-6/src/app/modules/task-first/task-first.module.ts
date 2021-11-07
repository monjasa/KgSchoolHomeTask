import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFirstComponent } from './task-first.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TaskFirstComponent,
  ],
  exports: [
    TaskFirstComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class TaskFirstModule {
}

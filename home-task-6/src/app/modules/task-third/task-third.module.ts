import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskThirdComponent } from './task-third.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TaskThirdComponent,
  ],
  exports: [
    TaskThirdComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class TaskThirdModule {
}

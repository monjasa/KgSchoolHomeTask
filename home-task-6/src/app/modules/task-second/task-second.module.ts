import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskSecondComponent } from './task-second.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RgbColorFormComponent } from './rgb-color-form/rgb-color-form.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    TaskSecondComponent,
    RgbColorFormComponent,
  ],
  exports: [
    TaskSecondComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class TaskSecondModule {
}

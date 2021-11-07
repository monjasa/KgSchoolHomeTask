import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HexToRgbPipe } from './pipes/hex-to-rgb.pipe';


@NgModule({
  declarations: [
    HexToRgbPipe,
  ],
  exports: [
    HexToRgbPipe,
  ],
  imports: [
    CommonModule,
  ],
})
export class SharedModule {
}

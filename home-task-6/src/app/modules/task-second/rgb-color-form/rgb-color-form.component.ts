import { Component, Input, OnInit } from '@angular/core';
import { RgbColor } from '../../../shared/models/rgb-color.model';

@Component({
  selector: 'app-rgb-color-form',
  templateUrl: './rgb-color-form.component.html',
  styleUrls: ['./rgb-color-form.component.scss']
})
export class RgbColorFormComponent {

  @Input()
  public color?: RgbColor;

}

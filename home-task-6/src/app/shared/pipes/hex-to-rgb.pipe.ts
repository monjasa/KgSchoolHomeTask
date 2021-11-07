import { Pipe, PipeTransform } from '@angular/core';
import { RgbColor } from '../models/rgb-color.model';

@Pipe({
  name: 'hexToRgb',
})
export class HexToRgbPipe implements PipeTransform {

  private readonly _redStartIndex = 1;

  private readonly _greenStartIndex = 3;

  private readonly _blueStartIndex = 5;

  private static getRgbColorComponent(hexColor: string, startIndex: number) {
    return parseInt(hexColor.substring(startIndex, startIndex + 2), 16);
  }

  transform(hexColor: string): RgbColor {
    return {
      red: HexToRgbPipe.getRgbColorComponent(hexColor, this._redStartIndex),
      green: HexToRgbPipe.getRgbColorComponent(hexColor, this._greenStartIndex),
      blue: HexToRgbPipe.getRgbColorComponent(hexColor, this._blueStartIndex),
    };
  }
}

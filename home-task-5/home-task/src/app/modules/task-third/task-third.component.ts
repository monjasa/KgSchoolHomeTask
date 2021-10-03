import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task-third',
  templateUrl: './task-third.component.html',
  styleUrls: ['./task-third.component.scss'],
})
export class TaskThirdComponent implements AfterViewInit {

  @ViewChild('paragraphElement') paragraphElement!: ElementRef;

  ngAfterViewInit() {
    const nativeElement = this.paragraphElement.nativeElement as HTMLParagraphElement;

    // It'd be better to use nativeElement.classList.add('p-red');
    nativeElement.setAttribute('class', 'p-red');

    console.log(`${nativeElement.clientWidth} ${nativeElement.clientHeight}`);
  }
}

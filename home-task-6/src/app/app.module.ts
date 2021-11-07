import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskFirstModule } from './modules/task-first/task-first.module';
import { TaskSecondModule } from './modules/task-second/task-second.module';
import { TaskThirdModule } from './modules/task-third/task-third.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TaskFirstModule,
    TaskSecondModule,
    TaskThirdModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

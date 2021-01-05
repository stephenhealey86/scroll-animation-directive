import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollAnimationDirective } from './directives/scroll-animation.directive';

@NgModule({
  declarations: [
    AppComponent,
    ScrollAnimationDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

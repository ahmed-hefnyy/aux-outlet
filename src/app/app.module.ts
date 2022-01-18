import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentOneComponent } from './components/component-one/component-one.component';
import { ComponentTwoComponent } from './components/component-two/component-two.component';
import { ComponentAuxComponent } from './components/component-aux/component-aux.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentAuxComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

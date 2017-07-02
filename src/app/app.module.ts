import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';

import { MODULE_ROUTES, MODULE_COMPONENTS } from './app.routes';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './mycomp/test-component/test-component.component';


@NgModule({
  declarations: [
    AppComponent,
    MODULE_COMPONENTS
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TextMaskModule,
    // RouterModule.forChild(appRoutes),
    RouterModule.forRoot(MODULE_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

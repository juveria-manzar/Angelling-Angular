import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { AiComponent } from './ai/ai.component';
import { FormComponent } from './form/form.component';
import { AwesomifyPipe } from './awesomify.pipe';
import { AlphabeticalOrderPipe } from './alphabetical-order.pipe';
import { MagnifyDirective } from './magnify.directive';

//module Decorator
@NgModule({
  declarations: [
    AppComponent,
    AiComponent,
    FormComponent,
    AwesomifyPipe,
    AlphabeticalOrderPipe,
    MagnifyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

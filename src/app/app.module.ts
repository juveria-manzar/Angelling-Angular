import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { AiComponent } from './ai/ai.component';
import { FormComponent } from './form/form.component';
import { AwesomifyPipe } from './awesomify.pipe';
import { AlphabeticalOrderPipe } from './alphabetical-order.pipe';
import { MagnifyDirective } from './magnify.directive';
import { NavigationComponent } from './navigation/navigation.component';
import { SubjectComponent } from './subject/subject.component';
import { HomeComponent } from './home/home.component';
import { CryptographyComponent } from './cryptography/cryptography.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { CompressionComponent } from './compression/compression.component';
import { InternetComponent } from './internet/internet.component';
import { SecretComponent } from './secret/secret.component';
import { NotFoundComponent } from './not-found/not-found.component';

//module Decorator
@NgModule({
  declarations: [
    AppComponent,
    AiComponent,
    FormComponent,
    AwesomifyPipe,
    AlphabeticalOrderPipe,
    MagnifyDirective,
    NavigationComponent,
    SubjectComponent,
    HomeComponent,
    CryptographyComponent,
    AlgorithmsComponent,
    CompressionComponent,
    InternetComponent,
    SecretComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

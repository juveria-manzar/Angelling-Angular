import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AiComponent } from './ai/ai.component';
import { CryptographyComponent } from './cryptography/cryptography.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { CompressionComponent } from './compression/compression.component';
import { InternetComponent } from './internet/internet.component';
import { SecretComponent } from './secret/secret.component';

const routes: Routes = [
  {path:'cryptography', component:CryptographyComponent,pathMatch:'full'},
  {path:'artificial-intelligence', component:AiComponent,pathMatch:'full'},
  {path:'algorithms', component:AlgorithmsComponent,pathMatch:'full'},
  {path:'compression', component:CompressionComponent,pathMatch:'full'},
  {path:'the-internet', component:InternetComponent,pathMatch:'full'},
  {path:'secret/:key', component:SecretComponent,pathMatch:'full'},
  {path:'', component:HomeComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

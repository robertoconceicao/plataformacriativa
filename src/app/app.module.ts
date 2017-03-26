import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { CalculoPage } from './calculo';
import { ResultadoPage } from './resultado';
import { HomePage } from './home';

@NgModule({
  declarations: [
    AppComponent,
    CalculoPage,
    ResultadoPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePage,
        pathMatch: 'full'
      },
      {
        path: 'calculo/:valor/:regime/:categoria',
        component: CalculoPage
      },
      {
        path: 'resultado/:id',
        component: ResultadoPage
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

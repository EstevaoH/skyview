import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgIconsModule } from '@ng-icons/core';
import * as icons from '@ng-icons/feather-icons';
import { TemperatureNowComponent } from './components/temperature-now/temperature-now.component';
import { AirQualityComponent } from './components/air-quality/air-quality.component';


@NgModule({
  declarations: [
    AppComponent,
    TemperatureNowComponent,
    AirQualityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgIconsModule.withIcons(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

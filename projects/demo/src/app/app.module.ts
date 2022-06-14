import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMaterialCdkTableModule } from 'ngx-material-cdk-table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaterialCdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

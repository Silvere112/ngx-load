import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderModule } from "projects/loading-directive/src/public-api";
import { CustomLoadingComponent } from "projects/examples/src/app/custom-loading/custom-loading.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoaderModule.with(
      {
        loaderComponent: CustomLoadingComponent
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

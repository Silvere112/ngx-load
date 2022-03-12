import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from "@angular/router";
import { DefaultLoadingPageComponent } from "projects/examples/src/app/default-loading/default-loading-page.component";
import { LoaderModule } from "projects/lod/src/public-api";


@NgModule({
  declarations: [
    DefaultLoadingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: DefaultLoadingPageComponent
      }
    ]),
    LoaderModule // Use the default loader
  ]
})
export class DefaultLoadingPageModule {
}

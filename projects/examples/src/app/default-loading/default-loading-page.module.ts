import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from "@angular/router";
import { DefaultLoadingPageComponent } from "projects/examples/src/app/default-loading/default-loading-page.component";
import { NgxLoadModule } from "projects/load/src/lib/ngx-load.module";


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
    NgxLoadModule // Use the default loader
  ]
})
export class DefaultLoadingPageModule {
}

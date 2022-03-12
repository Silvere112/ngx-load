import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderModule } from "projects/loading-directive/src/lib/loader.module";
import { RouterModule } from "@angular/router";
import { DefaultLoadingPageComponent } from "projects/examples/src/app/default-loading/default-loading-page.component";


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

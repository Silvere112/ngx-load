import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLoadingComponent } from "projects/examples/src/app/custom-loading/custom-loading.component";
import { CustomLoadingPageComponent } from 'projects/examples/src/app/custom-loading/custom-loading-page.component';
import { RouterModule } from "@angular/router";
import { LoaderModule } from "projects/lod/src/public-api";


@NgModule({
  declarations: [
    CustomLoadingComponent,
    CustomLoadingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: CustomLoadingPageComponent
      }
    ]),
    LoaderModule.with(
      {
        loaderComponent: CustomLoadingComponent // Provide your custom loader component here
      }
    )
  ]
})
export class CustomLoadingPageModule {
}

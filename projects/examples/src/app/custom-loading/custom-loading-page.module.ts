import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLoadingComponent } from "projects/examples/src/app/custom-loading/custom-loading.component";
import { CustomLoadingPageComponent } from 'projects/examples/src/app/custom-loading/custom-loading-page.component';
import { RouterModule } from "@angular/router";
import { NgxLoadModule } from "projects/load/src/lib/ngx-load.module";


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
    NgxLoadModule.with(
      {
        loaderComponent: CustomLoadingComponent // Provide your custom loader component here
      }
    )
  ]
})
export class CustomLoadingPageModule {
}

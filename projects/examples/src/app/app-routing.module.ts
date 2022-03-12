import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "custom",
    loadChildren: () => import("projects/examples/src/app/custom-loading/custom-loading-page.module").then(m => m.CustomLoadingPageModule)
  },
  {
    path: "default",
    loadChildren: () => import("projects/examples/src/app/default-loading/default-loading-page.module").then(m => m.DefaultLoadingPageModule)
  },
  {
    path: "**",
    redirectTo: "custom"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

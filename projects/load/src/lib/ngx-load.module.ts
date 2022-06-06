import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from "@angular/cdk/overlay";
import { CONFIGURATION_TOKEN, DEFAULT_CONFIGURATION, LoaderConfiguration } from "./core/loader.configuration";
import { DefaultLoadingComponent } from "./core/default-loading.component";
import { OverlayLoaderDirective } from "./overlay/overlay-loader.directive";
import { ReplacementLoaderDirective } from "./replacement/replacement-loader.directive";
import { LoaderService } from "./overlay/loader.service";

@NgModule({
  declarations: [
    DefaultLoadingComponent,
    OverlayLoaderDirective,
    ReplacementLoaderDirective
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  providers: [
    LoaderService,
    {provide: CONFIGURATION_TOKEN, useValue: DEFAULT_CONFIGURATION}
  ],
  exports: [
    OverlayLoaderDirective,
    ReplacementLoaderDirective
  ]
})
export class NgxLoadModule {
  static with(configuration: LoaderConfiguration): ModuleWithProviders<NgxLoadModule> {
    return {
      ngModule: NgxLoadModule,
      providers: [
        {provide: CONFIGURATION_TOKEN, useValue: configuration}
      ]
    };
  }

}

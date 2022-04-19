import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from "@angular/cdk/overlay";
import { ElementRuler } from "projects/load/src/lib/local-overlay/element-ruler.service";
import { CONFIGURATION_TOKEN, DEFAULT_CONFIGURATION, LoaderConfiguration } from "projects/load/src/lib/core/loader.configuration";
import { DefaultLoadingComponent } from "projects/load/src/lib/core/default-loading.component";
import { OverlayLoaderDirective } from "projects/load/src/lib/local-overlay/overlay-loader.directive";
import { ReplacementLoaderDirective } from "projects/load/src/lib/local-replacement/replacement-loader.directive";
import { LoaderService } from "projects/load/src/lib/global-overlay/loader.service";

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
    ElementRuler,
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

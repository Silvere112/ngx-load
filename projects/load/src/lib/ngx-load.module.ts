import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from "@angular/cdk/overlay";
import { ElementRuler } from "./local-overlay/element-ruler.service";
import { CONFIGURATION_TOKEN, DEFAULT_CONFIGURATION, LoaderConfiguration } from "./core/loader.configuration";
import { DefaultLoadingComponent } from "./core/default-loading.component";
import { OverlayLoaderDirective } from "./local-overlay/overlay-loader.directive";
import { ReplacementLoaderDirective } from "./local-replacement/replacement-loader.directive";
import { LoaderService } from "./global-overlay/loader.service";

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

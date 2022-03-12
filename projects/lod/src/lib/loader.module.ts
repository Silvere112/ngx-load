import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from "@angular/cdk/overlay";
import { LoadedDirective } from "./loaded.directive";
import { ElementRuler } from "./element-ruler.service";
import {
  CONFIGURATION_TOKEN,
  DEFAULT_CONFIGURATION,
  LoaderConfiguration
} from "./loader.configuration";
import { DefaultLoadingComponent } from "./default-loading.component";

@NgModule({
  declarations: [
    LoadedDirective,
    DefaultLoadingComponent
  ],
  imports: [
    CommonModule,
    OverlayModule
  ],
  providers: [
    ElementRuler,
    {provide: CONFIGURATION_TOKEN, useValue: DEFAULT_CONFIGURATION}
  ],
  exports: [
    LoadedDirective
  ]
})
export class LoaderModule {
  static with(configuration: LoaderConfiguration): ModuleWithProviders<LoaderModule> {
    return {
      ngModule: LoaderModule,
      providers: [
        {provide: CONFIGURATION_TOKEN, useValue: configuration}
      ]
    };
  }

}

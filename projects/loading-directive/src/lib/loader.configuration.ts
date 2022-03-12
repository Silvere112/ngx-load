import { InjectionToken } from "@angular/core";
import { DefaultLoadingComponent } from "projects/loading-directive/src/lib/default-loading.component";

export interface LoaderConfiguration {
  loaderComponent: any
}

export const CONFIGURATION_TOKEN = new InjectionToken("LOADER_CONFIGURATION");
export const DEFAULT_CONFIGURATION: LoaderConfiguration = {
  loaderComponent: DefaultLoadingComponent
}
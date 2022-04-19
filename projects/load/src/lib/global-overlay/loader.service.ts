import { Inject, Injectable } from '@angular/core';
import { Overlay } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { Observable, tap } from "rxjs";
import { CONFIGURATION_TOKEN, LoaderConfiguration } from "../core/loader.configuration";

@Injectable()
export class LoaderService {

  overlayRef = this.overlay.create({
    positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    hasBackdrop: true
  })

  constructor(private overlay: Overlay,
              @Inject(CONFIGURATION_TOKEN) private configuration: LoaderConfiguration
  ) {
  }

  attachLoader<T>(): (source: Observable<T>) => Observable<T> {
    return tap<T>({
        subscribe: () => this.showLoader(),
        next: () => this.hideLoader(),
        error: () => this.hideLoader()
      }
    );
  }

  private showLoader() {
    this.overlayRef.attach(new ComponentPortal(this.configuration.loaderComponent))
  }

  private hideLoader() {
    this.overlayRef.detach()
  }
}

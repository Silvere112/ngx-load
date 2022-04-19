import { Directive, ElementRef, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Overlay } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { Observable, Subscription } from "rxjs";
import { ElementRuler, Size } from "./element-ruler.service";
import { CONFIGURATION_TOKEN, LoaderConfiguration } from "../core/loader.configuration";

@Directive({
  selector: '[loadOverlayLoader]'
})
export class OverlayLoaderDirective implements OnInit, OnDestroy {
  overlayRef = this.createOverlay()
  rulerRef = this.ruler.create(this.elementRef.nativeElement)
  currentSubscription: Subscription | undefined

  @Input()
  set loadOverlayLoader(value: Observable<any>) {
    this.unsubscribeCurrentSubscription()
    this.subscribe(value)
  };

  constructor(
    private elementRef: ElementRef,
    private overlay: Overlay,
    private ruler: ElementRuler,
    @Inject(CONFIGURATION_TOKEN) private configuration: LoaderConfiguration
  ) {
  }

  ngOnInit(): void {
    this.rulerRef.change.subscribe((size: Size) => this.handleChange(size));
  }

  ngOnDestroy(): void {
    this.detachLoader()
    this.unsubscribeCurrentSubscription()
  }

  private unsubscribeCurrentSubscription() {
    if (this.currentSubscription) {
      this.detachLoader()
      this.currentSubscription.unsubscribe()
    }
  }

  private subscribe(value: Observable<any>) {
    this.attachLoader()
    this.currentSubscription = value.subscribe(
      {
        next: () => this.detachLoader(),
        complete: () => this.detachLoader(),
        error: () => this.detachLoader()
      }
    )
  }

  private createOverlay() {
    return this.overlay.create({
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      positionStrategy: this.overlay.position()
        .flexibleConnectedTo(this.elementRef)
        .withPush(false)
        .withPositions(
          [
            {
              originX: "start",
              originY: "bottom",
              overlayX: "start",
              overlayY: "bottom"
            }
          ]
        )
    })
  }

  private attachLoader() {
    this.overlayRef.attach(new ComponentPortal(this.configuration.loaderComponent))
  }

  private detachLoader() {
    this.overlayRef.detach()
  }

  private handleChange(size: Size) {
    this.update(size);
  }

  private update(size: Size) {
    this.overlayRef.updateSize(size);
  }
}


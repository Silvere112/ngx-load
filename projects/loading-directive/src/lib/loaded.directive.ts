import { Directive, ElementRef, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Overlay } from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { ElementRuler, Size } from "projects/loading-directive/src/lib/element-ruler.service";
import { CONFIGURATION_TOKEN, LoaderConfiguration } from "projects/loading-directive/src/lib/loader.configuration";

@Directive({
  selector: '[appLoaded]'
})
export class LoadedDirective implements OnInit, OnDestroy {
  isLoading = false
  isOverlayAttached = false

  @Input()
  set appLoaded(value: any | null | undefined) {
    this.isLoading = !value
    if (this.isLoading) {
      this.attach();
      return
    }
    this.detach();
  };

  rulerRef = this.ruler.create(this.elementRef.nativeElement)
  overlayRef = this.overlay.create({
    scrollStrategy: this.overlay.scrollStrategies.block(),
    positionStrategy: this.overlay.position()
      .flexibleConnectedTo(this.elementRef)
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

  constructor(
    private elementRef: ElementRef,
    private overlay: Overlay,
    private ruler: ElementRuler,
    @Inject(CONFIGURATION_TOKEN) private configuration: LoaderConfiguration) {
  }

  ngOnInit(): void {
    this.rulerRef.change.subscribe((size: Size) => this.handleChange(size));
  }

  ngOnDestroy(): void {
    this.detach()
    this.rulerRef.dispose()
  }

  private handleChange(size: Size) {
    if (this.isLoading) {
      this.update(size);
    }
  }

  private attach() {
    if (!this.isOverlayAttached) {
      this.overlayRef.attach(new ComponentPortal(this.configuration.loaderComponent))
      this.isOverlayAttached = true
    }

  }

  private detach() {
    if (this.isOverlayAttached) {
      this.overlayRef.detach()
      this.isOverlayAttached = false
    }
  }

  private update(size: Size) {
    this.overlayRef.updateSize(size);
  }

}


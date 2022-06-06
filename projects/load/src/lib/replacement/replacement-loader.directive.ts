import {
    Directive,
    ElementRef,
    Input,
    OnDestroy,
    OnInit,
    Renderer2,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';
import { Observable, Subscription } from "rxjs";

@Directive({
    selector: '[loadReplacementLoader]'
})
export class ReplacementLoaderDirective implements OnInit, OnDestroy {

    _replacementComponent: TemplateRef<any> | undefined
    _loaded: boolean = false
    currentSubscription: Subscription | undefined

    @Input()
    set loadReplacementLoader(value: Observable<any>) {
        this.unsubscribe();
        this.setIsLoading()
        this.currentSubscription = value.subscribe(
            {
                next: () => this.setIsLoaded(),
                error: () => this.setIsLoaded(),
                complete: () => this.setIsLoaded()
            }
        )
    };

    private unsubscribe() {
        if (this.currentSubscription) {
            this.currentSubscription.unsubscribe()
        }
    }

    private setIsLoaded() {
        this._loaded = true;
        this.render();
    }

    private setIsLoading() {
        this._loaded = false
        this.render();
    }

    @Input()
    set loadReplacementLoaderWithComponent(value: TemplateRef<any>) {
        this._replacementComponent = value
        this.render();
    }

    private render() {
        if (this._loaded) {
            this.displayInitialComponent()
        } else {
            this.displayReplacementComponent();
        }
    }

    private displayReplacementComponent() {
        if (this._replacementComponent) {
            this.viewContainer.clear();
            this.viewContainer.createEmbeddedView(this._replacementComponent)
        }
    }

    private displayInitialComponent() {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);
    }

    constructor(
        private templateRef: TemplateRef<any>,
        private elementRef: ElementRef,
        private renderer: Renderer2,
        private viewContainer: ViewContainerRef,
    ) {
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.unsubscribe()
    }


}


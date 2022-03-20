import { Component } from '@angular/core';
import { of, shareReplay, switchMap, timer } from "rxjs";

@Component({
  template: `
    <a routerLink="/custom">
      <button> Custom loader</button>
    </a>
    <div [loadIsLoaded]="observable | async" class="container">
      <span> {{ (observable | async) || "default loader" }}</span>
    </div>
  `,
  styles: []
})
export class DefaultLoadingPageComponent {

  observable = timer(2000, 2000).pipe(
    switchMap(it => it % 2 == 0 ? of("hello world " + it / 2) : of(false)),
    shareReplay()
  )

}

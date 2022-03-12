import { Component, OnInit } from '@angular/core';
import { of, shareReplay, switchMap, timer } from "rxjs";

@Component({
  template: `
    <a routerLink="/default">
      <button>Default loader</button>
    </a>
    <div [lodIsLoaded]="observable | async" class="container">
      <span> {{ (observable | async) || "custom loader" }}</span>
    </div>
  `,
  styles: [
  ]
})
export class CustomLoadingPageComponent {

  observable = timer(2000, 2000).pipe(
    switchMap(it => it % 2 == 0 ? of("hello world " + it/2) : of(false)),
    shareReplay()
  )

}

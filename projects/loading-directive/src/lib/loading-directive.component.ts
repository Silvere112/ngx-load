import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-loading-directive',
  template: `
    <p>
      loading-directive works!
    </p>
  `,
  styles: [
  ]
})
export class LoadingDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

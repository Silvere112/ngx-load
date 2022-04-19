import { Component } from '@angular/core';
import { EMPTY, map, Observable, shareReplay, tap, timer } from "rxjs";
import { PeriodicElement } from "projects/examples/src/app/table.component";
import { LoaderService } from "projects/load/src/public-api";

@Component({
  selector: 'app-root',
  template: `
    <section class="example-section">
      <mat-checkbox class="example-margin" [(ngModel)]="globalLoaderActivated">Global loader</mat-checkbox>
      <mat-checkbox class="example-margin" [(ngModel)]="overlayLoaderActivated">Overlay loader</mat-checkbox>
      <mat-checkbox class="example-margin" [(ngModel)]="replacementLoaderActivated">Replacement loader</mat-checkbox>
    </section>

    <mat-form-field>
      <mat-label>Loading time in millisecond</mat-label>
      <input matInput placeholder="2000" [(ngModel)]="loadingTime">
    </mat-form-field>

    <button mat-raised-button (click)="onReload()" class="btn">Reload</button>

    <div class="table-container">
      <app-table *ngIf="overlayLoaderActivated; else noLoader" class="table" [data]="dataSource | async "
                 [loadOverlayLoader]="dataSource"></app-table>

      <ng-container *ngIf="replacementLoaderActivated; else noLoader">
        <app-table class="table" [data]="dataSource | async"
                   *loadReplacementLoader="dataSource; withComponent skeleton"></app-table>
      </ng-container>
    </div>

    <ng-template #noLoader>
      <app-table class="table" [data]="dataSource | async"></app-table>
    </ng-template>

    <ng-template #skeleton>
      <div class="table">
        <ngx-skeleton-loader [theme]="{  height: '100%', width: '100%'}">

        </ngx-skeleton-loader>

      </div>
    </ng-template>
  `,
  styles: [`
    :host {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 20px;
    }

    .table-container {
      display: flex;
      gap: 50px;
    }

    .table {
      width: 300px;
      height: 700px;
    }

    .example-section {
      margin: 12px 0;
    }

    .example-margin {
      margin: 0 12px;
    }

  `]
})
export class AppComponent {
  dataSource: Observable<PeriodicElement[]> = EMPTY

  replacementLoaderActivated = true
  overlayLoaderActivated = true
  globalLoaderActivated = true
  loadingTime = 2000

  constructor(public loaderService: LoaderService) {
  }

  onReload() {
    this.loadData()
  }

  ngOnInit(): void {
    this.loadData()
  }

  private loadData() {
    this.dataSource = fetchDataWithLatency(this.loadingTime).pipe(
      this.globalLoaderActivated ? this.loaderService.attachLoader() : tap(),
      shareReplay(1)
    )
  }

}

function fetchDataWithLatency(millisecond: number) {
  return timer(millisecond).pipe(
    map(() => ELEMENT_DATA)
  )
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

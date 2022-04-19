import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  template: `
    <table mat-table [dataSource]="data || []" class="mat-elevation-z8">

      <ng-container matColumnDef="position">
        <th mat-header-cell *matHeaderCellDef> No.</th>
        <td mat-cell *matCellDef="let element"> {{element.position}} </td>
      </ng-container>

      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef> Name</th>
        <td mat-cell *matCellDef="let element"> {{element.name}} </td>
      </ng-container>

      <ng-container matColumnDef="weight">
        <th mat-header-cell *matHeaderCellDef> Weight</th>
        <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
      </ng-container>

      <ng-container matColumnDef="symbol">
        <th mat-header-cell *matHeaderCellDef> Symbol</th>
        <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  `,
  styles: [
      `
        table {
          width: 100%;
          height: 100%;
        }
      `
  ]
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol']

  @Input()
  data : PeriodicElement[] | null = null

  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

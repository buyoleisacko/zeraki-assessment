import { Component } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  position: number;
  url: string;
  summary: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Mali War', url: 'https://wikipedia/maliwar', summary: 'Handled by the the africans'},
  {position: 2, name: 'Ugandan Daily Read', url: 'https://wikipedia/maliwar', summary: 'ugandan daily read from the africans'},
  {position: 3, name: 'Putin And the 5 presidents', url: 'https://wikipedia/maliwar', summary: 'Putin and the five presidents from United States'},
  {position: 4, name: 'The rise of amazon empire', url: 'https://wikipedia/maliwar', summary: 'Jeff Bezos is the master of the world and the master of the world of the world'},
  {position: 5, name: 'Boron', url: 'https://wikipedia/maliwar', summary: 'Jeff Bezos is the master of the world and the master of the world of the world'},
  {position: 6, name: 'Boron', url: 'https://wikipedia/maliwar', summary: 'Putin and the five presidents from United States'},
  {position: 7, name: 'Nitrogen', url: 'https://wikipedia/maliwar', summary: 'ugandan daily read from the africans'},
  {position: 8, name: 'Oxygen', url: 'https://wikipedia/maliwar', summary: 'Handled by the the africans'},
  {position: 9, name: 'Fluorine', url: 'https://wikipedia/maliwar', summary: 'ugandan daily read from the africans'},
  {position: 10, name: 'Neon', url: 'https://wikipedia/maliwar', summary: 'Handled by the the africans'},
];

/**
 * @title Table with selection
 */
@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.css']
})
export class WikipediaComponent {

  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}


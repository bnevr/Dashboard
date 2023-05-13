import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTableItem>;
  dataSource: DataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'value', 'sensor'];

  constructor() {
    this.dataSource = new DataTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;





    var test= [
      {id: 1, date: '09.05.2022 07:45', value: 647815.3, location: 'Dampfkessel'},
      {id: 2, date: '12.05.2022 06:45', value: 647815.3, location: 'Dampfkessel'},
      {id: 3, date: '09.05.2022 07:45', value: 647815.3, location: 'Dampfkessel'},
      {id: 4, date: '12.05.2022 06:45', value: 647815.3, location: 'Dampfkessel'},
      {id: 5, date: '09.05.2022 07:45', value: 647815.3, location: 'Dampfkessel'},
      {id: 6, date: '12.05.2022 06:45', value: 647815.3, location: 'Dampfkessel'},
      {id: 7, date: '09.05.2022 07:45', value: 647815.3, location: 'Dampfkessel'},
      {id: 8, date: '12.05.2022 06:45', value: 647815.3, location: 'Dampfkessel'},
      {id: 9, date: '09.05.2022 07:45', value: 647815.3, location: 'Dampfkessel'},
      {id: 10, date: '12.05.2022 06:45', value: 647815.3, location: 'Dampfkessel'},
      {id: 11, date: '09.05.2022 07:45', value: 647815.3, location: 'Dampfkessel'},
      {id: 12, date: '12.05.2022 06:45', value: 647815.3, location: 'Dampfkessel'},
      {id: 13, date: '09.05.2022 07:45', value: 647815.3, location: 'Dampfkessel'},
      {id: 14, date: '12.05.2022 06:45', value: 647815.3, location: 'Dampfkessel'},
      {id: 15, date: '09.05.2022 07:45', value: 647815.3, location: 'Dampfkessel'},
      {id: 16, date: '12.05.2022 06:45', value: 647815.3, location: 'Dampfkessel'},
      {id: 17, date: '09.05.2022 07:45', value: 647815.3, location: 'Dampfkessel'},
      {id: 18, date: '12.05.2022 06:45', value: 647815.3, location: 'Dampfkessel'},
      {id: 19, date: '09.05.2022 07:45', value: 647815.3, location: 'Dampfkessel'},
      {id: 20, date: '12.05.2022 06:45', value: 647815.3, location: 'Dampfkessel'}
    ];

    this.dataSource.data = test;



  }
}

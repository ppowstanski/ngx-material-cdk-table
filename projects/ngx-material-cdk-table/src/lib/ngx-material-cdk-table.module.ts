import { NgModule } from '@angular/core';
import { NgxMaterialCdkTableComponent } from './ngx-material-cdk-table.component';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { HeaderCellDirective } from './definitions/header-cell';
import { DataCellDirective } from './definitions/data-cell';
import { TableColumnDirective } from './definitions/table-column';
import { CdkTableModule } from '@angular/cdk/table';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    HeaderCellDirective,
    DataCellDirective,
    TableColumnDirective, 
    NgxMaterialCdkTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    CdkTableModule,
    ScrollingModule
  ],
  exports: [
    HeaderCellDirective,
    DataCellDirective,
    TableColumnDirective,
    NgxMaterialCdkTableComponent
  ]
})
export class NgxMaterialCdkTableModule { }

import { NgModule } from '@angular/core';
import { NgxMaterialCdkTableComponent } from './ngx-material-cdk-table.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    NgxMaterialCdkTableComponent
  ],
  imports: [
    MatTableModule
  ],
  exports: [
    NgxMaterialCdkTableComponent
  ]
})
export class NgxMaterialCdkTableModule { }

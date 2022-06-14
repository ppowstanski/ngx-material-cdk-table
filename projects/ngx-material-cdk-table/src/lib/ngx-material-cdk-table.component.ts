import { AfterContentInit, AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';
import { TableColumnDirective } from './definitions/table-column';

@Component({
  selector: 'ngx-material-grid',
  templateUrl: './ngx-material-cdk-table.component.html',
  styleUrls: ['./ngx-material-cdk-table.component.scss'],
})
export class NgxMaterialCdkTableComponent {

  @Input() dataSource: any[];
  @Input() displayedColumns: string[];

  @ContentChildren(TableColumnDirective) tableColumns: QueryList<TableColumnDirective>;
}

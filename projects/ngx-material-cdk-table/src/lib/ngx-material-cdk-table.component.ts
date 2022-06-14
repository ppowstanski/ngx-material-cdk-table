import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ngx-material-cdk-table',
  templateUrl: './ngx-material-cdk-table.component.html',
  styleUrls: ['./ngx-material-cdk-table.component.scss'],
})
export class NgxMaterialCdkTableComponent implements OnInit {

  @Input() dataSource: any[] = [];
  @Input() displayedColumns: string[] = [];

  ngOnInit(): void {
  }
}

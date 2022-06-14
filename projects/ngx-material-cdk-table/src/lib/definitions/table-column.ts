import { AfterContentInit, ContentChild, Directive, Input, TemplateRef } from '@angular/core';
import { DataCellDirective } from './data-cell';
import { HeaderCellDirective } from './header-cell';

@Directive({
  selector: '[ngxGridColumn]'
})
export class TableColumnDirective implements AfterContentInit {
  @Input('ngxGridColumn') name: string;

  @ContentChild(DataCellDirective, {
    read: TemplateRef
  }) dataCell: TemplateRef<DataCellDirective>;

  @ContentChild(HeaderCellDirective, {
    read: TemplateRef
  }) headerCell: TemplateRef<HeaderCellDirective>;

  ngAfterContentInit(): void {
    console.log(this.name, this.headerCell);
  }
}
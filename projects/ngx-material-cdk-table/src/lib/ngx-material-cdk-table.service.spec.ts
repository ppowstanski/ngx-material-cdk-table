import { TestBed } from '@angular/core/testing';

import { NgxMaterialCdkTableService } from './ngx-material-cdk-table.service';

describe('NgxMaterialCdkTableService', () => {
  let service: NgxMaterialCdkTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMaterialCdkTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

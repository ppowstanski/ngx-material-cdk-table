import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialCdkTableComponent } from './ngx-material-cdk-table.component';

describe('NgxMaterialCdkTableComponent', () => {
  let component: NgxMaterialCdkTableComponent;
  let fixture: ComponentFixture<NgxMaterialCdkTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMaterialCdkTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialCdkTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

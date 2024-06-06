import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateScannerComponent } from './update-scanner.component';

describe('UpdateScannerComponent', () => {
  let component: UpdateScannerComponent;
  let fixture: ComponentFixture<UpdateScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateScannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

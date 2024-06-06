import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddscannerComponent } from './addscanner.component';

describe('AddscannerComponent', () => {
  let component: AddscannerComponent;
  let fixture: ComponentFixture<AddscannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddscannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddscannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

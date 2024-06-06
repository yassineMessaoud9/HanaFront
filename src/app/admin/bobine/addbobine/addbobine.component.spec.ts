import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbobineComponent } from './addbobine.component';

describe('AddbobineComponent', () => {
  let component: AddbobineComponent;
  let fixture: ComponentFixture<AddbobineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbobineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddbobineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

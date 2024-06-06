import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBobineComponent } from './update-bobine.component';

describe('UpdateBobineComponent', () => {
  let component: UpdateBobineComponent;
  let fixture: ComponentFixture<UpdateBobineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBobineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBobineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

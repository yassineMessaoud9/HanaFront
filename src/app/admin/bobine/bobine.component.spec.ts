import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BobineComponent } from './bobine.component';

describe('BobineComponent', () => {
  let component: BobineComponent;
  let fixture: ComponentFixture<BobineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BobineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BobineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatezoneComponent } from './updatezone.component';

describe('UpdatezoneComponent', () => {
  let component: UpdatezoneComponent;
  let fixture: ComponentFixture<UpdatezoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatezoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatezoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

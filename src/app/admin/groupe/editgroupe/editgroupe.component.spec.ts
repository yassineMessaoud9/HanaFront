import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditgroupeComponent } from './editgroupe.component';

describe('EditgroupeComponent', () => {
  let component: EditgroupeComponent;
  let fixture: ComponentFixture<EditgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditgroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

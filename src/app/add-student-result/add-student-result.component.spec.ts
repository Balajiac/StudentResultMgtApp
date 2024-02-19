import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentResultComponent } from './add-student-result.component';

describe('AddStudentResultComponent', () => {
  let component: AddStudentResultComponent;
  let fixture: ComponentFixture<AddStudentResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddStudentResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddStudentResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

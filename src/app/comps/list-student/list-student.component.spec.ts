import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudentComponent } from './list-student.component';

describe('ListStudentComponent', () => {
  let component: ListStudentComponent;
  let fixture: ComponentFixture<ListStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

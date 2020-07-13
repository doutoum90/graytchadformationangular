import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSuppressionComponent } from './modal-suppression.component';

describe('ModalSuppressionComponent', () => {
  let component: ModalSuppressionComponent;
  let fixture: ComponentFixture<ModalSuppressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSuppressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSuppressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

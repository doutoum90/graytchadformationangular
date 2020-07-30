import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerMDPComponent } from './changer-mdp.component';

describe('ChangerMDPComponent', () => {
  let component: ChangerMDPComponent;
  let fixture: ComponentFixture<ChangerMDPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangerMDPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangerMDPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

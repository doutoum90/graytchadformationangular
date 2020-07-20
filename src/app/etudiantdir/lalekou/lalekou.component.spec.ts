import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LalekouComponent } from './lalekou.component';

fdescribe('LalekouComponent', () => {
  let component: LalekouComponent;
  let fixture: ComponentFixture<LalekouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LalekouComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LalekouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

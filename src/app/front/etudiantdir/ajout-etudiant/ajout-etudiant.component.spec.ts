import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEtudiantComponent } from './ajout-etudiant.component';

describe('AjoutEtudiantComponent', () => {
  let component: AjoutEtudiantComponent;
  let fixture: ComponentFixture<AjoutEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

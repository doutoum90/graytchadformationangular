import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationEtudiantComponent } from './modification-etudiant.component';

describe('ModificationEtudiantComponent', () => {
  let component: ModificationEtudiantComponent;
  let fixture: ComponentFixture<ModificationEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificationEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

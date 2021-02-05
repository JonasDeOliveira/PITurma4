import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilMedicoComponent } from './perfil-medico.component';

describe('PerfilMedicoComponent', () => {
  let component: PerfilMedicoComponent;
  let fixture: ComponentFixture<PerfilMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

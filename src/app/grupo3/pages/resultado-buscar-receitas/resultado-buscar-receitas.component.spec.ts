import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoBuscarReceitasComponent } from './resultado-buscar-receitas.component';

describe('ResultadoBuscarReceitasComponent', () => {
  let component: ResultadoBuscarReceitasComponent;
  let fixture: ComponentFixture<ResultadoBuscarReceitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoBuscarReceitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoBuscarReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

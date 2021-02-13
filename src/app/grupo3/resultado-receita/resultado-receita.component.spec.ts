import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoReceitaComponent } from './resultado-receita.component';

describe('ResultadoReceitaComponent', () => {
  let component: ResultadoReceitaComponent;
  let fixture: ComponentFixture<ResultadoReceitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadoReceitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

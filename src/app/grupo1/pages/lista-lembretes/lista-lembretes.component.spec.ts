import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLembretesComponent } from './lista-lembretes.component';

describe('ListaLembretesComponent', () => {
  let component: ListaLembretesComponent;
  let fixture: ComponentFixture<ListaLembretesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLembretesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLembretesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

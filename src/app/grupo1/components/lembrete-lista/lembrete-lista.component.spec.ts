import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LembreteListaComponent } from './lembrete-lista.component';

describe('LembreteListaComponent', () => {
  let component: LembreteListaComponent;
  let fixture: ComponentFixture<LembreteListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LembreteListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LembreteListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LembreteItemListaComponent } from './lembrete-item-lista.component';

describe('LembreteItemListaComponent', () => {
  let component: LembreteItemListaComponent;
  let fixture: ComponentFixture<LembreteItemListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LembreteItemListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LembreteItemListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaAlimentarComponent } from './agenda-alimentar.component';

describe('AgendaAlimentarComponent', () => {
  let component: AgendaAlimentarComponent;
  let fixture: ComponentFixture<AgendaAlimentarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaAlimentarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaAlimentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgservicoComponent } from './agservico.component';

describe('AgservicoComponent', () => {
  let component: AgservicoComponent;
  let fixture: ComponentFixture<AgservicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgservicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgservicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

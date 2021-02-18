import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCartaoComponent } from './modal-cartao.component';

describe('ModalCartaoComponent', () => {
  let component: ModalCartaoComponent;
  let fixture: ComponentFixture<ModalCartaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCartaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

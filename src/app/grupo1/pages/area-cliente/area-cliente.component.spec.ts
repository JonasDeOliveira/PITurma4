import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaClienteComponent } from './area-cliente.component';

describe('AreaClienteComponent', () => {
  let component: AreaClienteComponent;
  let fixture: ComponentFixture<AreaClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

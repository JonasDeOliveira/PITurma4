import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaNutricionalComponent } from './programa-nutricional.component';

describe('ProgramaNutricionalComponent', () => {
  let component: ProgramaNutricionalComponent;
  let fixture: ComponentFixture<ProgramaNutricionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramaNutricionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramaNutricionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

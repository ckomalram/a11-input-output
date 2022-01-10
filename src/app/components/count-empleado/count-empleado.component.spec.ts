import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountEmpleadoComponent } from './count-empleado.component';

describe('CountEmpleadoComponent', () => {
  let component: CountEmpleadoComponent;
  let fixture: ComponentFixture<CountEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

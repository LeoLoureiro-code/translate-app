import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultForm } from './result-form';

describe('ResultForm', () => {
  let component: ResultForm;
  let fixture: ComponentFixture<ResultForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

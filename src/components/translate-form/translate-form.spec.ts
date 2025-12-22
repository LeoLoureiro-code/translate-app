import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateForm } from './translate-form';

describe('TranslateForm', () => {
  let component: TranslateForm;
  let fixture: ComponentFixture<TranslateForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslateForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

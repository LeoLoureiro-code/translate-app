import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateOptions } from './translate-options';

describe('TranslateOptions', () => {
  let component: TranslateOptions;
  let fixture: ComponentFixture<TranslateOptions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateOptions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslateOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

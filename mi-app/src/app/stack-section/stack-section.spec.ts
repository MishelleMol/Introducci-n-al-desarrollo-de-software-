import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackSection } from './stack-section';

describe('StackSection', () => {
  let component: StackSection;
  let fixture: ComponentFixture<StackSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

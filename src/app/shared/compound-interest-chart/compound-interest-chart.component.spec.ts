import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundInterestChartComponent } from './compound-interest-chart.component';

describe('CompoundInterestChartComponent', () => {
  let component: CompoundInterestChartComponent;
  let fixture: ComponentFixture<CompoundInterestChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoundInterestChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoundInterestChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

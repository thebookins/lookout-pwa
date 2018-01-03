import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseChartComponent } from './glucose-chart.component';

describe('GlucoseChartComponent', () => {
  let component: GlucoseChartComponent;
  let fixture: ComponentFixture<GlucoseChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlucoseChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlucoseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

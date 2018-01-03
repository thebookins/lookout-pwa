import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glucose-chart',
  templateUrl: './glucose-chart.component.html',
  styleUrls: ['./glucose-chart.component.css']
})
export class GlucoseChartComponent implements OnInit {

  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];

  public lineChartType:string = 'line';

  constructor() { }

  ngOnInit() {
  }

}

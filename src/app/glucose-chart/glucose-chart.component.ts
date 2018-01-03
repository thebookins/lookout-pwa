import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glucose-chart',
  templateUrl: './glucose-chart.component.html',
  styleUrls: ['./glucose-chart.component.css']
})
export class GlucoseChartComponent implements OnInit {

  // lineChart
  public data:Array<any> = [
    {
      data: Array.apply(null, Array(36)).map((x, i) => ({x: 3 * (i - 35)/36, y: 6 + 3 * Math.sin(0.2 * (i - 35))})),
      fill: false
    },
    {
      data: Array.apply(null, Array(36)).map((x, i) => ({x: 3 * i/36, y: 6 + 3 * Math.sin(0.2 * i)})),
      fill: false
    }
  ];

  public options:any = {
//        devicePixelRatio: 2,
    animation: {
      duration: 0
    },
    pointBorderColor: 'green',
    pointBackgroundColor: 'green',
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'bottom',
        ticks: {
          min: -3,
          max: +3,
          stepSize: 1
        },
        // ticks: {
        //   source: 'data'
        // },
        // time: {
        //   min: Date.now() - 3*60*60000,
        //   max: Date.now()
        // }
      }],
      yAxes: [{
        display: true,
        ticks: {
          suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
          suggestedMax: 20    // minimum will be 0, unless there is a lower value.
        }
      }]
    },
    legend: { display: false }
  };

  public colors:Array<any> = [
      { // green
        backgroundColor: 'green',
        borderColor: 'green'
      },
      { // dark grey
        backgroundColor: 'white',
        borderColor: 'purple'
      }
    ];

  // public lineChartType:string = 'line';

  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import {Input } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {
  @Input() charttype : string = '';
  title = 'ng2-charts-demo';

 

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [
      {
        data: [ 65, 59, 80, 81, 56, 55, 40 ],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;
  
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor() {
  }

  ngOnInit() {
    if (this.charttype=='diff'){
      this.lineChartData = {
        labels: [
          '08.05.2023',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'January',
          'February',
          'March',
          'April',
        ],
        datasets: [
          {
            data: [ 22, 44, 66, 84, 56, 55, 40 ],
            label: 'Hauptzähler',
            fill: true,
            tension: 0.5,
            borderColor: 'black',
            backgroundColor: 'rgba(255,0,0,0.3)'
          },
          {
            data: [ 55, 33, 44, 51, 55, 55, 40 ],
            label: 'Dampfkessel',
            fill: true,
            tension: 0.5,
            borderColor: 'black',
            backgroundColor: 'rgba(255,222,0,0.3)'
          }
        ]
      }
    }else {
      this.lineChartData = {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
        datasets: [
          {
            data: [ 99, 88, 11, 33, 98, 55, 40 ],
            label: 'Series A',
            fill: true,
            tension: 0.5,
            borderColor: 'black',
            backgroundColor: 'rgba(255,0,0,0.3)'
          },
          {
            data: [ 55, 33, 44, 51, 55, 55, 40 ],
            label: 'Series B',
            fill: true,
            tension: 0.5,
            borderColor: 'black',
            backgroundColor: 'rgba(255,222,0,0.3)'
          }
        ]
      }
    }
  }

}

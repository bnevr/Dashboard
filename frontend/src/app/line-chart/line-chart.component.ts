import { Component, OnInit, Input } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})

export class LineChartComponent implements OnInit {
  @Input() charttype : string = '';
  title = 'ng2-charts-demo';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: []
  }
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    if (this.charttype=='diff'){
      this.loadDiffData();
    } else {
      this.loadTotalData();
    }
  }

loadTotalData() {
  this.http.get<any[]>('https://bnevr-cuddly-fishstick-wg6j4w6xjpwh97qg-4200.preview.app.github.dev/assets/api/total.json').subscribe((data: any[]) => {
    let hauptzahlerData = data.filter(d => d.sensorname === 'Hauptzähler').map(d => d.reading);
    let dampfkesselData = data.filter(d => d.sensorname === 'Dampfkessel').map(d => d.reading);
    let labels = data.map(d => d.time_reading);
    labels = labels.filter((_, index) => index %2 ===0)

    this.lineChartData = {
      labels: labels,
      datasets: [
        {
          data: hauptzahlerData,
          label: 'Hauptzähler',
          fill: true,
          tension: 0.5,
          borderColor: 'black',
          backgroundColor: 'rgba(116, 126, 203,0.2)'
        },
        {
          data: dampfkesselData,
          label: 'Dampfkessel',
          fill: true,
          tension: 0.5,
          borderColor: 'black',
          backgroundColor: 'rgba(29, 186, 170,0.2)'
        }
      ]
    };
  });
 }

 loadDiffData() {
    this.http.get<any[]>('https://bnevr-cuddly-fishstick-wg6j4w6xjpwh97qg-4200.preview.app.github.dev/assets/api/total.json').subscribe((data: any[]) => {
      let summedData: { time_reading: string, reading: number, sensorname: string }[] = [];
      let totalHauptzahler =0
      let totalDampfkessel =0
      data.forEach((item: { time_reading: string, reading: number, sensorname: string }) => {
        let existingItem = summedData.find(d => d.time_reading === item.time_reading);
  
        if (item.sensorname==='Hauptzähler') {
          totalHauptzahler = totalHauptzahler + item.reading
          summedData.push({ time_reading: item.time_reading, reading: totalHauptzahler, sensorname: item.sensorname });
        }
        else {
          totalDampfkessel = totalDampfkessel + item.reading
          summedData.push({ time_reading: item.time_reading, reading: totalDampfkessel, sensorname: item.sensorname });
        }
          
      });
  
      let hauptzahlerData = summedData.filter(d => d.sensorname === 'Hauptzähler').map(d => d.reading);
      let dampfkesselData = summedData.filter(d => d.sensorname === 'Dampfkessel').map(d => d.reading);
      let labels = summedData.map(d => d.time_reading);
  
      labels = labels.filter((_, index) => index % 2 === 0);
  
      this.lineChartData = {
        labels: labels,
        datasets: [
          {
            data: hauptzahlerData,
            label: 'Hauptzähler',
            fill: true,
            tension: 0.5,
            borderColor: 'black',
            backgroundColor: 'rgba(116, 126, 203,0.2)'
          },
          {
            data: dampfkesselData,
            label: 'Dampfkessel',
            fill: true,
            tension: 0.5,
            borderColor: 'black',
            backgroundColor: 'rgba(29, 186, 170,0.2)'
          }
        ]
      };
    });
  }
  
 /*
 loadDiffDataOld() {
  this.lineChartData = {
    labels: [
      '01.04.2023',
      '02.04.2023',
      '03.04.2023',
      '04.04.2023',
      '05.04.2023',
      '06.04.2023',
      '07.04.2023',
      '08.04.2023' ,
      '09.04.2023',
      '10.04.2023',
      '11.04.2023',
      '12.04.2023',
      '13.04.2023',
      '14.04.2023',
      '15.04.2023',
      '16.04.2023',
      '17.04.2023',
      '18.04.2023',
      '19.04.2023',
      '20.04.2023',
      '21.04.2023',
      '22.04.2023',
      '23.04.2023',
      '24.04.2023',
      '25.04.2023',
      '26.04.2023',
      '27.04.2023',
      '28.04.2023',
      '29.04.2023',
      '30.04.2023'
    ],
    datasets: [
      {
        data: [ 350, 9000, 380, 410, 420, 1200, 800, 200, 400, 300, 400, 300, 2000, 400,300,400,300,600,400,900,600,400,300,400,300,1200,600,500,300],
        label: 'Hauptzähler',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(116, 126, 203,0.2)'
      },
      {
        data: [ 250, 300, 280, 310, 320, 800, 700, 100, 180, 200, 100, 50, 1500,300,150,400,200,550,100,600,200,200,100,300,200,900,500,400,300 ],
        label: 'Dampfkessel',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(29, 186, 170,0.2)'
      }
    ]
  }
 }*/
}

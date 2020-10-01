import { Component } from '@angular/core';
import { StocksService } from './stocks.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ng-stocks';

  chart = [];

  constructor(private _stocks:StocksService) {}

  ngOnInit () {
    this._stocks.tickerHistorical()
      .subscribe(res => {

        let close = res['historicals'].map(res => res.close)
        let date = res['historicals'].map(res => res.date)
        let high = res['historicals'].map(res => res.high)
        let low = res['historicals'].map(res => res.low)
        let open = res['historicals'].map(res => res.open)
        let volume = res['historicals'].map(res => res.volume)

        console.log(date)
        console.log(close)
        console.log(high)
        console.log(low)
        console.log(open)
        console.log(volume)


        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: date,
            datasets: [
              {
                data: close,
                borderColor: 'red',
                fill: false
              },
              // {
              //   data: high,
              //   borderColor: '#3cba9f',
              //   fill: false
              // },
              // {
              //   data: low,
              //   borderColor: '#3cba9f',
              //   fill: false
              // },
              {
                data: open,
                borderColor: '#3cba9f',
                fill: false
              },
              // {
              //   data: volume,
              //   borderColor: '#3cba9f',
              //   fill: false
              // },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display:true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })
      })
  }
}

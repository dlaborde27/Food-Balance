import { Component, OnDestroy, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Subscription } from 'rxjs';
import { DataService } from '../providers/data.service';

@Component({
  selector: 'app-donutchart',
  templateUrl: './donutchart.component.html',
  styleUrls: ['./donutchart.component.css']
})
export class DonutchartComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public chart: any;

  private data: any = {
    labels: [
      'Calories Consumed',
      'Remaining Calories'
    ],
    datasets: [{
      label: 'Calories Stadistics',
      data: [0,0],
      backgroundColor: [
        '#037E00',
        '#BCBCBC'
      ]
    }]
  };

  private options: any = {
    cutout: '75%',
    /*responsive: true,
    maintainAspectRatio: false,*/
    plugins: {
      legend: {
          display: false
      },
    }
  }

  private config: any = {
    type: 'doughnut',
    data: this.data,
    options: this.options
  };

  constructor(private dataProvider: DataService) {}

  ngOnInit(){
    this.subscriptions.push(
      this.dataProvider.getTotalCalories().subscribe(total => {
        this.data.datasets[0].data[0] = total;
        this.updateChart();
      }),
      this.dataProvider.getRemainingCalories().subscribe(remaining => {
        this.data.datasets[0].data[1] = remaining;
        this.updateChart();
      })
    );
    this.createChart();
    Chart.register({
      id: 'custom_center_text',
      beforeDraw: (chart) => {
        const width = chart.width;
        const height = chart.height;
        const ctx = chart.ctx;

        ctx.restore();
        const fontSize = (height / 70).toFixed(2);
        ctx.font = `${fontSize}em 'Manrope', sans-serif`;
        ctx.fillStyle = '#037E00';
        ctx.textBaseline = 'middle';

        const total = this.data.datasets[0].data.reduce((a: any, b: any) => a + b, 0);
        const consumed = this.data.datasets[0].data[0];
        const percentage = Math.round((consumed / total) * 100); 
        const text = `${percentage}%`;  
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;

        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    });
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  updateChart() {
    if (this.chart) {
      this.chart.update();
    }
  }
  createChart(){
    this.chart = new Chart("MyChart", this.config);
  }
}

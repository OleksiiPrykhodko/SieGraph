import { Component, OnInit } from '@angular/core';
import {
  Chart,
  ChartType,
  ChartOptions,
  ChartData,
  Colors,
  BubbleController,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  registerables,
} from 'node_modules/chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
})

export class GraphComponent {

  constructor() {
  }

  ngOnInit(){
    this.ShowGraph();
  }

  // Input information. Send it to html to id of canvas.
  private _yAxisId: string = "graphYAxis";
  private _tagName: string = "tagNameId";

  private _yAxisDataSet ={
    // max value
    labels: ['0','99'],
    datasets: [{
      label: ' Value ',
      // add max value from incoming data
      data: [0, 2147383648],
      borderWidth: 0
    }]
  };

  private _dataSet = {
    labels: ['2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM' ,'2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM','2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM','2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM' ,'2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM','2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM','2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM'],
    datasets: [{
      label: ' Value ',
      data: [2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342,2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342,2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342,2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342,2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342,2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342,2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342],
      borderWidth: 2
    }]
  };

  // Data for seeding:

  // 10 = '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM'
  // 10 = 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342

  // 200 = '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM' ,'2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM','2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM','2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM' ,'2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM','2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM','2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:20 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM', '2/10/2023 5:45:25 PM'
  // 200 = 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342,2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342,2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342,2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342, 2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342,2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342,2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342,2147383648, 99543251, 395567546, 1234234234, 223459235, 323549993, 234592359, 93239845, 523499752, 223633342

  private _yAxisChartOptions = {
    maintainAspectRatio: false,
    layout:{
      padding: { bottom : 56}
    },
    plugins: {
      legend: {display : false},
    },
    scales: {
      x:{
        ticks: {display : false},
        grid: {drawTicks : false}
      },
      y: {
        beginAtZero: true,
        afterFit: (ctx : any) => {ctx.width = 87}
      }
    }
  };

  private _chartOptions = {
    maintainAspectRatio: false,
    layout:{
      padding: { top : 10, bottom: 10}
    },
    plugins: {
      legend: {display : false},
    },
    scales: {
      //x: {
      //  ticks: {display : true,
      //    align: 'start'
      //  }
      //},
      y: {
        beginAtZero: true,
        ticks: {display : false},
        grid: {
          drawTicks : false
        }
      }
    }
  };

  ShowGraph(){
    // This is chart only for creating Y axis.
    new Chart(this._yAxisId, {
      type: 'bar',
      data: this._yAxisDataSet,
      options: this._yAxisChartOptions
    });

    // This is real chart.
    var currentChart = new Chart(this._tagName, {
      type: 'line',
      data: this._dataSet,
      options: this._chartOptions
    });

    var box = document.querySelector<HTMLElement>(".box");
    var barLength = currentChart.data.labels!.length;

    if(barLength > 2){
      var chartWidth = barLength * 150;
      box!.style.width = `${chartWidth}px`;
    }
  }

}
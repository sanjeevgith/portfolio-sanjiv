import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
//import { link } from 'fs';
import * as FusionCharts from 'fusioncharts';


import { jsPDF } from "jspdf";
import { AppserviceService } from './appservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  finalcount:any=0;




 
    
 

  constructor(private service: AppserviceService) {

  }





  count(){
      this.service.count().subscribe((responseList: any)=>{
        this.finalcount = responseList;
        //console.log(this.finalcount)
    })
  }

  title = 'profile';
  dataSource: any;
  data: any





  btn() {
    let link = document.createElement("a");
    // link.download = "Resume_Sanjiv_Prajapati";
    link.download = "Sanjiv updaded Resume";
    //link.href = "assets/Resume_Sanjiv_Prajapati.pdf";
    link.href = "assets/Sanjiv updaded Resume.pdf";
    link.click()
  }










  revenueChart:any;
  graph() {
    this.revenueChart = new FusionCharts({
      type: 'pie2d',
      renderAt: 'chart-graph',
      width: '100%',
      height: '350',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "caption": "Website Code Analysis",
          "subCaption": "",
          "numberPrefix": "%",
          "showPercentInTooltip": "0",
          "decimals": "1",
          "animateClockwise": "1",
          //Theme
          "theme": "fusion",
          "bgColor": "#33ccff",
        },
        "data": [{
          "label": "Html",
          "value": "39.6"
        },
        {
          "label": "Java Script",
          "value": "4.0"
        },
        {
          "label": "Type Script",
          "value": "19.4"
        },
        {
          "label": "css",
          "value": "37.0"
        }
        ]
      }
    }).render();

  }







  ngOnInit(): void {
    this.graph();
    this.count();

   
  }








}





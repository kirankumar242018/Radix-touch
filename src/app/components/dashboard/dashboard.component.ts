import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import {HttpService} from '../../services/HttpServive/http.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  BarChart=[];
  PieChart=[];
  lineChart=[];
  lineChart1=[];
  reportChart1=[];
  radarChart=[];

  tableData;
  projectTableData;
  color_code="red";

  columns=["#","Name","Status","ProjectName","Action"];

  constructor(public jsonService:HttpService) { }

  ngOnInit() {
    this.getTableData();
    this.getProjectData();

                // BarChart
    this.BarChart=new Chart('barChart',{
      type:'bar',
      data:{
      labels:["1","2","3","4","5","6","7","8","9","10","11"],
      datasets:[{
      data:[6,4,6,8,10,5,6,7,9,5,6],
      fill:false,
      lineTension:0.3,
      borderColor:"#eba434",
      backgroundColor:"#eba434",
      borderWidth:0.25
      }]
      },
      options:{
      title:{
      text:"Bar Chart",
      display:false
      },
      legend:{
      display:false
      },
      scales:{
        yAxes:[{
        display:false
        }],
        xAxes:[{
            display:false
        }],
        
        }
      }
      });

          // Pie Chart
      this.PieChart = new Chart('pieChart', {
        type: 'pie',
      data: {
       
       legend: {
        labels: ["35.7%","25.5%","8.2%","30.6%"],
        display: false,
     },
       tooltips: {
        enabled: false
      },
       datasets: [{
           
           data: [35,25,8,32],
           backgroundColor: [

            'rgba(255, 64, 0,0.2)',
            'rgba(255, 0, 191,0.2)',
            'rgba(128, 255, 0,0.2)',
            'rgba(0, 191, 255,0.2)',


               
           ],
           borderColor: [
            'rgba(255, 64, 0,1)',
            'rgba(255, 0, 191,1)',
            'rgba(128, 255, 0,1)',
            'rgba(0, 191, 255,1)',
           ],
           borderWidth: 1
       }]
      }, 
      options: {
       title:{
           text:"Pie Chart",
           display:false
       },
       scales: {
           yAxes: [{
               ticks: {
                   beginAtZero:true,
                   display:false
               }
           }]
       }
      }
      });

        // LineChart
      this.lineChart=new Chart('lineChart',{
        type:'line',
        data:{
        labels:["1","2","3","4","5","6","7","8","9","10"],
        datasets:[{
        data:[3,4,3,4,7,5,2,1],
        //fill:false,
        lineTension:0.1,
        borderColor:"blue",
        backgroundColor:"white",
  
        borderWidth:1
        }]
        },
        options:{
        title:{
        text:"Line Chart",
        display:false
        },
        legend:{
        display:false
        },
        scales:{
        yAxes:[{
        display:false
        }],
        xAxes:[{
            display:false
        }],
        
        }
        }
        });

          // LineChat2
        this.lineChart1=new Chart('lineChart1',{
          type:'line',
          data:{
          labels:["1","2","3","4","5","6","7","8","9","10"],
          datasets:[{
          data:[3,4,3,4,7,5,2,1],
          //fill:false,
          lineTension:0.1,
          borderColor:"blue",
          backgroundColor:"white",
    
          borderWidth:1
          }]
          },
          options:{
          title:{
          text:"Line Chart",
          display:false
          },
          legend:{
          display:false
          },
          scales:{
          yAxes:[{
          display:false
          }],
          xAxes:[{
              display:false
          }],
          
          }
          }
          });

            // Report Chart
          this.reportChart1=new Chart('reportChart',{
            type:'line',
            data:{
            labels:["Mon","Tues","Wed","Thurs","Fri","Sat","Sun"],
            datasets:[{
            label:"Product",
            data:[24,18,16,18,24,36,28],
            fill:true,
            lineTension:0.3,
            borderColor:[
              "rgba(255, 64, 0,1)"

            ],
            backgroundColor:[
              "rgba(255, 64, 0,0.2)"
            ],
            //bgcolor:"blue",
      
            borderWidth:1
            },{
              label:"Service",
              data:[20,22,30,22,18,22,30],
              fill:false,
              lineTension:0.3,
              borderColor:[
                "rgba(0, 191, 255,1)"

              ],
              backgroundColor:[
                "rgba(255, 64, 0,0.2)"

              ],
              borderWidth:1
              }]
            },
            options:{
            title:{
            text:"Line Chart",
            display:false
            },
            legend:{
            display:true
            },
            scales:{
            yAxes:[{
            display:false
            }],
            // xAxes:[{
            //     display:false
            // }],
            
            }
            }
            });

              // Radar Chart
            this.radarChart=new Chart('radarChart',{
              type:'radar',
              data:{
              labels:["Mon","Tues","Wed","Thurs","Fri","Sat","Sun"],
              datasets:[{
              
              label: "Product",
              data:[52,25,59,90,81,60,82],
              fill:true,
              lineTension:0.1,
              borderColor:[
                "rgba(255, 64, 0,1)"
              ],
              backgroundColor:[
                "rgba(255, 64, 0,0.2)"
              ],
              borderWidth:1
              },{
                label: "Service",
                data:[84,40,100,40,90,40,90],
                fill:true,
                lineTension:0.1,
                borderColor:[
                  "rgba(0, 191, 255,1)"
                ],
                backgroundColor:[
                  "rgba(0, 191, 255,0.2)"
                ],
                borderWidth:1
                }]
              },
              options:{
              title:{
              text:"Line Chart",
              display:false
              },
              legend:{
              display:true
              },
              scales:{
              yAxes:[{
              display:false
              }],
              xAxes:[{
                  display:false
              }],
              
              }
              }
              });

  }
  getTableData(){
    this.jsonService.getJsonData().subscribe(data=>{
      console.log("data..!",data.table_data);
      this.tableData=data.table_data;      

    })

    }
  getProjectData(){
    this.jsonService.getJsonTableData().subscribe(data=>{
      console.log("project data..!",data.table_data);
      this.projectTableData = data.table_data;
    })
  }  
  

}

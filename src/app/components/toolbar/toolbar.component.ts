import { DOCUMENT } from '@angular/common';
import { Component, OnInit,Inject } from '@angular/core';
import{DataService} from '../../services/DataService/data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  scroll="up";

  //isfullscreen:boolean;
  
  constructor(private dataService:DataService,@Inject(DOCUMENT) private document: any) { }
  elem;
  
  


  ngOnInit() {
    this.elem = this.document.documentElement;
    //console.log("elements",this.elem)
    
    
    
    // $('button').click(function()
    // {
    //    let elem = document.body; 
     

    //    let methodToBeInvoked =  elem.requestFullscreen ;
   
    //    if(methodToBeInvoked) methodToBeInvoked.call(elem);
    // });

   
    
    this.openFullscreen();
    
  }
  
  openFullscreen() {
    
    if (this.elem.requestFullScreen) {
      console.log("entering to fullScreen...!")
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullscreen();
    } else if (this.elem.webkitRequestFullScreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullScreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
    
  }




}

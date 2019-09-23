import { Component, OnInit } from '@angular/core';
import Glide from '@glidejs/glide';
// import * as $ from 'jquery';


declare var $ : any;

 
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    new Glide('.glide').mount();

    $(document).ready(function(){
      $('.next').click(function(){ $('.carousel').carousel('next');return false; });
      $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
    });

  }

}

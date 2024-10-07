import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { DummyApiService } from 'src/app/services/dummy-api.service';

@Component({
  selector: 'app-dummy-api',
  templateUrl: './dummy-api.component.html',
  styleUrls: ['./dummy-api.component.css']
})
export class DummyApiComponent {
quote: any;
id: any='';
author:any='';
allpost:any;
allproducts:any;
allalbums:any;
userId: any;
title: any;
constructor(private dummyApiService: DummyApiService){}


getQuote() {
this.dummyApiService.getQuote().subscribe((response) =>{
  this.quote=response.quote;
  this.id=response.id;
  this.author=response.author;
  console.log(response);
}
);

}
getallpost(){
  this.dummyApiService.getallpost().subscribe((response)=>{
    this.allpost=response;
  });
}
getallproducts(){
  this.dummyApiService.getallproducts().subscribe((response)=>{
    this.allproducts=response;
  })
}
getallalbums(){
  this.dummyApiService.getallalbums().subscribe((response)=>{
    this.getallalbums=response;
  })
}

}

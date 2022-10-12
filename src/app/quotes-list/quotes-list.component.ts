import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.FetchData()
  }
  FetchData=()=>{
    this.myapi.viewQuotes().subscribe((data)=>{
      this.quotesData=data
    })
  }
  quotesData:any={}
  ngOnInit(): void {
  }

}

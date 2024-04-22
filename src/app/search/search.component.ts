import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() emitter:EventEmitter<any> = new EventEmitter<any>();

  search(value:any){
    this.emitter.emit(value);
  }

}

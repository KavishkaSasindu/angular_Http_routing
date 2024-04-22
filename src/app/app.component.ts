import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dataArray = [
    'java',
    'php',
    'perl',
    'python',
    'c++',
    'c#'
  ]

  searchValue = '';

  filterList:any = [];

  search(searchValue: any){
    this.filterList = []
    this.searchValue = searchValue;

    for(const data of this.dataArray){
      if(data.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase())){
        this.filterList.push(data);
      }
    }
  }


}

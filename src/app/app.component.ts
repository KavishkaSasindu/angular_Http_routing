import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myData:any = []

  constructor(private http: HttpClient) {
  }

  loadData() {
    this.http.get("https://jsonplaceholder.typicode.com/comments")
      .subscribe(response=>{
        console.log(response);
        this.myData = response
      })
  }


}

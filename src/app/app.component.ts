import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoadingService} from "./services/loading.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myData:any = []

   loading:boolean =false;

  constructor(private http: HttpClient,public loadingService:LoadingService) {
  }

  loadData() {
    this.loadingService.loadingState.next(true);
    this.http.get("https://jsonplaceholder.typicode.com/comments")
      .subscribe(response=>{
        console.log(response);
        this.myData = response
        setTimeout(()=>{
          this.loadingService.loadingState.next(false);
        },5000)
      })
  }


}

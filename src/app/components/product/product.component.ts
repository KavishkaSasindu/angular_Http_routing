import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute) {
    activeRoute.paramMap.subscribe(response=>{
      let selectedId = response.get("id");
      console.log(selectedId )
    })
  }

  ngOnInit(): void {
  }


}

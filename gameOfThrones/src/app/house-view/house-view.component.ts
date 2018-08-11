import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GotHttpService } from '../got-http.service';

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css']
})
export class HouseViewComponent implements OnInit {
  public currentHouse:any;

  constructor(private _route:ActivatedRoute,private router:Router, public gotService:GotHttpService) {
    console.log('House view constructor called')
   }

  ngOnInit() {
    console.log('House view component onit called')
    let id = this._route.snapshot.paramMap.get('id');
    this.gotService.singleHouseInfo(id).subscribe(
      data =>{
        //console.log(data);
        this.currentHouse = data;
        console.log('CurrentHouseInfo');
        console.log(this.currentHouse);
      },
      error =>{
        console.log(error.errorMessage)
      }
    )
  }

}

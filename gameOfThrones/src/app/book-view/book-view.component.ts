import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GotHttpService } from '../got-http.service';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  public currentBook:any;

  constructor(private _route:ActivatedRoute,private router:Router, public gotService:GotHttpService) {
    console.log('Book view constructor called')
   }

  ngOnInit() {
    console.log('Book view component onit called')
    let id = this._route.snapshot.paramMap.get('id');
    this.gotService.singleBookInfo(id).subscribe(
      data =>{
        //console.log(data);
        this.currentBook = data;
        console.log('CurrentHouseInfo');
        console.log(this.currentBook);
      },
      error =>{
        console.log(error.errorMessage)
      }
    )
  }

}
